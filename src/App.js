import { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';

const hours = 8;

function antiRound(number){
  let [num, decimal] = number.toFixed(1).split('.');
  decimal = Number(decimal);
  const newNum = Number(num) + (decimal < 5 ? 1 : 0);
  console.log("\n\nAnti round: ", number, newNum);
  return newNum;
}

function SingleEmployeeSchedule({employee, sessions, onClose}){
  const sortedSessions = sessions.sort((a,b) => a.time - b.time);

  return (
    <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="fixed inset-0" onClick={onClose}>

      </div>
      <div className="rounded overflow-hidden w-full max-w-lg bg-white relative z-10">
        <div className="bg-blue-900 text-white p-3 flex items-center justify-between">
          <div className="flex items-center ml-1">
            <div className="border relative w-8 h-8 rounded-full overflow-hidden">
              <img className="absolute w-full h-full object-cover" src={employee.dp} alt="" />
            </div>
            <h3 className="ml-3">{employee.full_name}</h3>
          </div>

          <button className="p-1" onClick={onClose}>
            <svg className="w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
          </button>
        </div>

        <div className="p-3">
          {sortedSessions.map((session) => {
            let selfReview = session.reviewer._id === session.owner._id;
            let asReviewer = false;
            if(!selfReview && session.reviewer._id === employee._id)
              asReviewer = true;

            return (
              <div className="mb-3">
                <div className="flex items-start">
                  <span className="w-24 mr-5 flex-shrink-0 text-blue-900 text-right">
                    {session.time} - {session.time}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      { asReviewer && <span><span className="font-normal">Review</span> {session.owner.full_name}</span> }
                      { !asReviewer && session.activity.title}
                    </h3>
                    <p className="text-sm opacity-75">
                      {session.description}
                    </p>

                    { !selfReview && !asReviewer && (
                      <div className="flex items-center mt-1">
                        <img style={{width: "24px", height: "24px", objectFit: "cover", borderRadius: "50%"}} 
                          title={'Reviewer: ' + session.reviewer.full_name} src={session.reviewer.dp} alt="" 
                        />

                        <span className="ml-3">
                          Reviewer: { session.reviewer.full_name }
                        </span>
                      </div>
                    ) }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScheduleGrid({employees, sessions}){
  const [selectedUser, setSelectedUser] = useState(null);

  function getEmployeeSessions(employeeId){
    if(!sessions || !sessions.length)
      return [];

    return sessions.filter(session => {
      return session.owner._id === employeeId || session.reviewer._id === employeeId;
    });
  }

  return (
    <>
      {
        employees.map((e, i) => (
          <div key={e._id} style={{display: 'flex', border: "2px solid #f5f5f5"}}>
            <div className="employee-title hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedUser(e)}>
              <img style={{width: "20px", height: "20px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 0 1px rgba(0, 0, 0, 0.26)"}} 
                title={'Reviewer: ' + e.full_name} src={e.dp} alt="" 
              />
              <span>{e.full_name}</span>
            </div>
            <div style={{flex: 1, position: "relative"}}>
              <div style={{height: "100%",display: 'grid', gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
                {
                  Array(hours*4).fill(12).map((_, i) => (
                    <div key={i} style={{display: 'flex', background: "#ddd", position: 'relative'}}>
                      {/* <span style={{position: "absolute"}}>{ i + 1 }</span> */}
                    </div>
                  ))
                }
              </div>

              <div style={{height: "100%", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.01)", display: 'grid', gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
                {
                  getEmployeeSessions(e._id).map((session, index) => {
                    let selfReview = session.reviewer._id === session.owner._id;
                    let asReviewer = false;
                    if(!selfReview && session.reviewer._id === e._id)
                      asReviewer = true;

                    let rowStart = 1, rowEnd = 1;
                    let timeDiff = Math.round((session.time - 800) / 100) * 100;
                    let colStart = (timeDiff / 25) + 1;
                    colStart += ((session.time - 800) % 100) / 15;
                    let colEnd = colStart + (session.duration / 15);
                    // let colEnd = colStart + 2;
                    let gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

                    return (
                      <div key={session._id} className="session-card bg-blue-900 text-white" style={{gridArea}}>
                        <div className="text-xs opacity-50">
                          { session.time }
                        </div>
                        <h3>
                          { asReviewer && 
                            <span>Review { session.owner.full_name }</span>
                          }
                          { !asReviewer && session.activity.title }
                        </h3>
                        { !selfReview && !asReviewer && (
                          <div style={{marginTop: "0.15rem", display: "flex", alignItems: "center", fontSize: "13px"}}>
                            <img style={{width: "20px", height: "20px", objectFit: "cover", borderRadius: "50%"}} 
                              title={'Reviewer: ' + session.reviewer.full_name} src={session.reviewer.dp} alt="" 
                            />
                          </div>
                        ) }
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        ))}
        
        { selectedUser && (
            <SingleEmployeeSchedule 
              employee={selectedUser}
              sessions={getEmployeeSessions(selectedUser._id)}
              onClose={_ => setSelectedUser(null)}
            />
          )
        }
    </>
  );
}

function App() {
  const {isLoading, error, data} = useQuery('employeeList', () =>
    fetch('https://walterkimaro.com/api/Employee').then(res =>
      res.json()
    )
  );

  const sessions = useQuery('sessions', () =>
    fetch('https://walterkimaro.com/api/Session').then(res =>
      res.json()
    )
  );

  if (isLoading || sessions.isLoading) return 'Loading...';

  return (
    <div>
      <div style={{display: 'flex', background: "#fff", color: "white", position: "sticky", top: 0, zIndex: 1}}>
        <div style={{background:"#333", borderRight: "1px solid #fff", padding: '0.25rem', width: '90px', flexShrink: 0}}>
          {/* Person / Time */}
        </div>
        <div style={{flex: 1, display: 'grid', gap: "1px", gridTemplateColumns: `repeat(${hours}, 1fr)`}}>
          {
            Array(hours).fill(11).map((_, i) => (
              <div key={i} style={{display: 'flex', background: "#333", padding: '0.25rem'}}>
                { 8 + i}:00
              </div>
            ))
          }
        </div>
      </div>

      <ScheduleGrid employees={data} sessions={sessions.data} />
    </div>
  );
}

export default App;
