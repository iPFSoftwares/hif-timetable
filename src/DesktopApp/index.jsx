import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AddSession from './AddSession';
import './App.css';
import EditSession from './EditSession';
import SessionTile from './SessionTile';
import SingleEmployeeSchedule from './SingleEmployeeSchedule';
import SpotlightSearch from './SpotlightSearch';
import { confirmPassword, getEmployeeSessions, getTimeFromRow } from '../utils';
import { BASE_URL } from '../constants';

const hours = 10;

function ScheduleGrid({employees, sessions, onSessionsUpdated}){
  const [selectedUser, setSelectedUser] = useState(null);
  const [newSession, setNewSession] = useState(null);
  const [sessionBeingEdited, setSessionBeingEdited] = useState(null);
  const [spotlightSearch, setSpotlightSearch] = useState(false);
  const allEmployee = employees.find(({full_name}) => full_name === "All");
  
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

  async function handleSetNewSession(session){
    try {
      await confirmPassword();
      setNewSession(session);
    } catch (error) {
      
    }
  }

  function handleOnSaveSession(){
    setNewSession(null);
    setSessionBeingEdited(null);
    onSessionsUpdated();
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 h-screen flex" style={{zIndex: 3}}>
        <div className="employee-title cursor-pointer">
          <span className="opacity-0">All</span>
        </div>

        <div className="flex-1 grid h-full" style={{gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
          {
            getEmployeeSessions(sessions, allEmployee._id).map((session, index) => {
              return (
                <SessionTile 
                  key={index}
                  forAll 
                  employee={allEmployee._id} 
                  session={session} 
                  onEdit={setSessionBeingEdited}
                  onDelete={handleOnSaveSession}
                />
              );
            })
          }
        </div>
      </div>
      {
        employees.filter(({full_name}) => full_name !== "All").map((e, i) => (
          <div key={e._id} style={{display: 'flex', border: "2px solid #f5f5f5"}}>
            <div className="employee-title hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedUser(e)}>
              <img style={{width: "20px", height: "20px", objectFit: "cover", borderRadius: "50%", boxShadow: "0 0 1px rgba(0, 0, 0, 0.26)"}} 
                title={'Reviewer: ' + e.full_name} src={e.dp} alt="" 
              />
              <span>{e.full_name}</span>
            </div>
            <div style={{flex: 1, position: "relative"}}>
              <div className="grid h-full" style={{gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
                {
                  Array(hours*4).fill(12).map((_, i) => (
                    <div key={i} style={{display: 'flex', background: "#eee", position: 'relative'}}
                      className="cursor-pointer"
                      // onClick={() => {console.log("Add new session: ", {employee: e, startTime: getTimeFromRow(i+1)});}}
                      onClick={() => handleSetNewSession({employee: e, startTime: getTimeFromRow(i+1)})}
                    >
                      {/* <span style={{position: "absolute"}}>{ i + 1 }</span> */}
                    </div>
                  ))
                }
              </div>

              <div className="absolute inset-0 grid pointer-events-none" style={{background: "rgba(0, 0, 0, 0.01)", gap: "1px", gridTemplateColumns: `repeat(${hours * 4}, 1fr)`}}>
                {
                  getEmployeeSessions(sessions, e._id).map((session, index) => {
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
              sessions={getEmployeeSessions(sessions, selectedUser._id)}
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
    fetch(`${BASE_URL}/Employee`).then(res =>
      res.json()
    )
  );

  const sessions = useQuery('sessions', () =>
    fetch(`${BASE_URL}/Session`).then(res =>
      res.json()
    )
  );

  if (isLoading || sessions.isLoading)
    return <div className="bg-gradient-to-br from-blue-900 to-purple-500 text-white h-screen flex items-center justify-center text-lg tracking-wider">LOADING...</div>;

  return (
    <div>
      <div className="sticky top-0" style={{display: 'flex', background: "#fff", color: "white", zIndex: 5}}>
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
