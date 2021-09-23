import { useState } from 'react';
import { useQuery } from 'react-query';
import AddSession from './AddSession';
import './App.css';
import SingleEmployeeSchedule from './SingleEmployeeSchedule';
import { getTimeFromNumber, addMinutesToTime, getTimeFromRow } from './utils';

const hours = 8;

function ScheduleGrid({employees, sessions, onSessionsUpdated}){
  const [selectedUser, setSelectedUser] = useState(null);
  const [newSession, setNewSession] = useState(null);

  function getEmployeeSessions(employeeId){
    if(!sessions || !sessions.length)
      return [];

    return sessions.filter(session => {
      return session.owner._id === employeeId || session.reviewer._id === employeeId;
    });
  }

  function handleOnSaveSession(){
    setNewSession(null);
    onSessionsUpdated();
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
                    <div key={i} style={{display: 'flex', background: "#ddd", position: 'relative'}}
                      className="cursor-pointer"
                      // onClick={() => {console.log("Add new session: ", {employee: e, startTime: getTimeFromRow(i+1)});}}
                      onClick={() => setNewSession({employee: e, startTime: getTimeFromRow(i+1)})}
                    >
                      {/* <span style={{position: "absolute"}}>{ i + 1 }</span> */}
                    </div>
                  ))
                }
              </div>

              <div className="absolute inset-0 grid pointer-events-none" style={{background: "rgba(0, 0, 0, 0.01)", gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
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
                      <div key={session._id} className="session-card pointer-events-auto cursor-pointer bg-blue-900 text-white" style={{gridArea}}>
                        <div className="truncate opacity-50" style={{fontSize: "10px"}}>
                          { getTimeFromNumber(session.time) } - {addMinutesToTime(session.time, session.duration)}
                        </div>
                        <h3 className="mt-0.5">
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

        { newSession && (
            <AddSession 
              session={newSession}
              onClose={_ => setNewSession(null)}
              onSave={handleOnSaveSession}
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

      <ScheduleGrid 
        employees={data} sessions={sessions.data} 
        onSessionsUpdated={() => sessions.refetch() }
      />
    </div>
  );
}

export default App;
