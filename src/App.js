import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AddSession from './AddSession';
import './App.css';
import EditSession from './EditSession';
import SessionTile from './SessionTile';
import SingleEmployeeSchedule from './SingleEmployeeSchedule';
import SpotlightSearch from './SpotlightSearch';
import { getTimeFromRow } from './utils';

const hours = 8;

function ScheduleGrid({employees, sessions, onSessionsUpdated}){
  const [selectedUser, setSelectedUser] = useState(null);
  const [newSession, setNewSession] = useState(null);
  const [sessionBeingEdited, setSessionBeingEdited] = useState(null);
  const [spotlightSearch, setSpotlightSearch] = useState(false);
  
  useEffect(() => {
    document.addEventListener("keyup", onShiftUp, false);
    document.addEventListener("keydown", onShiftDown, false);
    return () => {
        document.removeEventListener("keydown", onShiftDown, false);
        document.removeEventListener("keyup", onShiftUp, false);
    };
  }, []);

  function onShiftUp(e){
    if(e.key === "Shift"){
      const userPermissionsInitEvent = new CustomEvent('shift-released');
      window.dispatchEvent(userPermissionsInitEvent);
    }

    else if(!newSession && !sessionBeingEdited){
      if(e.key === "/")
          setSpotlightSearch(true);
      else if(e.key === "Escape"){
        if(selectedUser && selectedUser.fromSpotlight){
          setSpotlightSearch(true);
          setTimeout(() => setSelectedUser(null), 20);
        }
        else
          setSelectedUser(null);
      }
    }
  }

  function onShiftDown(e){
    if(e.key === "Shift"){
      const userPermissionsInitEvent = new CustomEvent('shift-selected');
      window.dispatchEvent(userPermissionsInitEvent);
    }
  }

  function getEmployeeSessions(employeeId){
    if(!sessions || !sessions.length)
      return [];

    return sessions.filter(session => {
      return session.owner._id === employeeId || session.reviewer._id === employeeId;
    });
  }

  function handleOnSaveSession(){
    setNewSession(null);
    setSessionBeingEdited(null);
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
                    return (
                      <SessionTile 
                        key={index} 
                        employee={e} 
                        session={session} 
                        onEdit={setSessionBeingEdited}
                        onDelete={handleOnSaveSession}
                      />
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

        { sessionBeingEdited && (
            <EditSession 
              session={sessionBeingEdited}
              onClose={_ => setSessionBeingEdited(null)}
              onSave={handleOnSaveSession}
            />
          )
        }
        
        { spotlightSearch && (
            <SpotlightSearch 
              onSelectUser={user => {setSpotlightSearch(false); setSelectedUser(user)}}
              onClose={_ => setSpotlightSearch(false)}
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
        employees={data.sort((a, b) => a.tin_number - b.tin_number)}
        sessions={sessions.data} 
        onSessionsUpdated={() => sessions.refetch() }
      />
    </div>
  );
}

export default App;
