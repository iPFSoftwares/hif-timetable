import { useState } from "react";
import useColorThief from "../useColorThief";
import { getEmployeeSessions } from "../utils";
import SessionCard from "./SessionCard";

const EmployeeCard = ({employee, sessions}) => {
    const employeeSessions = getEmployeeSessions(sessions, employee._id);
    const [expanded, setExpanded] = useState(false);
    const color = useColorThief(employee.dp);

    if(expanded){
        return (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-white text-black">
                <div className="sticky pt-24 -top-24 z-50 bg-indigo-700">
                    <img className="opacity-10 absolute top-0 left-0 w-full h-full object-cover" src={employee.dp} alt="" />

                    <div className="py-5 px-6">    
                        <img className="mb-2 border w-12 h-12 rounded-full object-cover" src={employee.dp} alt="" />
                                
                        <h2 className="text-white font-semibold text-2xl">
                            { employee.full_name.split(' ')[0] }'s Schedule
                        </h2>
                    </div>

                    <button className="fixed top-5 right-4 rounded-full bg-white w-8 h-8 flex items-center justify-center border border-white"
                        onClick={() => setExpanded(false)}
                    >
                        <svg className="w-4" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </button>
                </div>

                <div className="pt-6 px-5 min-h-screen">
                    {
                        employeeSessions.map((session, i) => (
                            <div key={i} className="mb-4">
                                <SessionCard
                                    employee={employee}
                                    session={session}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="shadow-lg relative pt-20 pb-5 px-5 rounded-lg overflow-hidden sbg-white stext-gray-500 sbg-gradient-to-br from-blue-900 to-purple-500"
            // style={{background: color ? color : ""}}
            onClick={() => setExpanded(true)}
        >
            <img className="opacity-10 absolute top-0 left-0 w-full h-full object-cover" src={employee.dp} alt="" />

            <div className="absolute inset-0 bg-white opacity-20 backdrop-filter backdrop-blur-sm"
                // style={{background: color ? color : ""}}
            ></div>

            <div className="absolute w-8 h-8 rounded-full right-4 top-4 overflow-hidden grid grid-cols-2">
                <span className="h-4 transform -rotate-12 bg-white" style={{background: color ? color : ""}}></span>
                <span className="h-4 transform -rotate-12 bg-white" style={{background: color ? color.replace("1)", "0.5)") : ""}}></span>
                <span className="h-4 transform rotate-12 bg-white" style={{background: color ? color.replace("1)", "0.5)") : ""}}></span>
                <span className="h-4 transform -rotate-12 bg-white" style={{background: color ? color : ""}}></span>
            </div>

            <div className="relative z-10">
                <img className="mb-2 border w-12 h-12 rounded-full object-cover" src={employee.dp} alt="" />

                <h3 className="text-xl font-semibold">
                    {employee.full_name}
                </h3>
                <p className="opacity-70">
                    { employeeSessions.length } Sessions
                </p>
            </div>
        </div>
    );
}
 
export default EmployeeCard;