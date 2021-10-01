import { useState } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";
import EmployeeCard from "./EmployeeCard";

const MobileApp = () => {
    const [searching, setSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const employees = useQuery('employeeList', () =>
        fetch(`${BASE_URL}/Employee`).then(res =>
            res.json()
        )
    );

    const sessions = useQuery('sessions', () =>
        fetch(`${BASE_URL}/Session`).then(res =>
            res.json()
        )
    );

    if (employees.isLoading || sessions.isLoading) return <div className="bg-gradient-to-br from-blue-900 to-purple-500 text-white h-screen flex items-center justify-center text-lg tracking-wider">LOADING...</div>;

    let employeeList = employees.data.filter(({full_name}) => full_name !== "All");
    if(searchQuery.length){
        employeeList = employeeList.filter(({full_name}) => full_name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
            .map((e) => ({...e, searchIndex: e.full_name.toLowerCase().indexOf(searchQuery.toLowerCase())}))
            .sort((a, b) => a.searchIndex - b.searchIndex);
    }

    return (
        <div className="h-screen overflow-y-auto bg-gray-200s bg-gradient-to-br from-blue-900 to-purple-500 text-white">
            <div className="py-3 px-6 sticky top-0 z-50 bg-indigo-700 flex items-center justify-between overflow-hidden"
                style={{width: "100vw"}}
            >
                { !searching && <>
                        <h2 className="font-semibold text-2xl">
                            All Sessions
                        </h2>

                        <button className="rounded-full bg-white w-8 h-8 flex items-center justify-center border border-white"
                            onClick={() => setSearching(true)}
                        >
                            <svg className="w-6" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </button>
                    </>
                }

                { searching && <>
                        <div className="flex-1 inline-flex bg-white rounded px-2">
                            <svg className="w-6 opacity-30" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                            
                            <input autoFocus className="placeholder-gray-400 outline-none border-none ml-2 flex-1 text-black text-xl bg-transparent" type="text" placeholder="Type to search" 
                                style={{minWidth: "0px", width: `${window.innerWidth - 180}px`}}
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />

                            <button 
                                className={`ml-auto rounded-full bg-white w-10 h-10 flex items-center justify-center border border-white ${!searchQuery.length && 'pointer-events-none sopacity-0'}`}
                                onClick={() => setSearchQuery("")}
                            >
                                <svg className="w-4" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                            </button>
                        </div>

                        <button className="bg-transparent py-2 px-2 flex-shrink-0"
                            onClick={() => {setSearchQuery(""); setSearching(false);}}>
                            Cancel
                        </button>
                    </>
                }
            </div>

            <div className="pt-4 px-5">
                {
                    employeeList.map((e, i) => (
                        <div key={i} className="mb-4">
                            <EmployeeCard 
                                employee={e}
                                sessions={sessions.data}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MobileApp;