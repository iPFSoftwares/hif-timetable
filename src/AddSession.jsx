import { useEffect, useState } from "react";
import { addMinutesToTime, getTimeFromNumber } from "./utils";

const hourChoices = [8,9,10,11,12,13,14,15];
const minuteChoices = [0, 15, 30, 45];

function AddSession({ session, onClose, onSave }) {
    const [employee, setEmployee] = useState(session.employee);
    const [reviewer, setReviewer] = useState(session.employee);
    const [startTime, setStartTime] = useState(session.startTime.split(":"));
    const [endTime, setEndTime] = useState([8,30]);

    useEffect(() => {
        setEndTime(addMinutesToTime(Number(session.startTime.replace(":", "")), 60).split(":"));
    }, []);

    return (
        <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="fixed inset-0" onClick={onClose}>

            </div>
            <div className="rounded-md overflow-hidden w-full max-w-sm relative z-10">
                <div className="bg-blue-900 text-white py-3 px-4 flex items-center justify-between">
                    <h3 className="font-semibold">
                        Add Session
                    </h3>

                    <button className="p-1 hover:bg-white hover:bg-opacity-25 rounded-full" onClick={onClose}>
                        <svg className="w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></svg>
                    </button>
                </div>

                <div className="bg-white py-3 px-4">
                    <div className="mb-4">
                        Employee

                        <div className="flex items-center px-2 rounded bg-gray-400 bg-opacity-25 border border-gray-300" style={{height: "34px"}}>
                            <div className="border relative w-6 h-6 rounded-full overflow-hidden">
                                <img className="absolute w-full h-full object-cover" src={employee.dp} alt="" />
                            </div>
                            <span className="ml-2 text-sm">{employee.full_name}</span>

                            <button className="ml-auto text-blue-900 text-xs p-0" onClick={onClose}>
                                Change
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="flex-1 flex-shrink-0 mr-2">
                                <label>Start Time</label>

                                <div className="inline-flex items-center px-2 rounded border border-gray-300" style={{height: "34px"}}>
                                    <select className="" value={startTime[0].toString().padStart(2, '0')} onChange={e => setStartTime([e.target.value, startTime[1]])}>
                                        {
                                            hourChoices.map(h => (
                                                <option value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="mx-3 text-gray-400">|</span>
                                    <select className="px-" value={startTime[1].toString().padStart(2, '0')} onChange={e => setStartTime([startTime[0], e.target.value])}>
                                        {
                                            minuteChoices.map(h => (
                                                <option value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="flex-1 flex-shrink-0">
                                <label>End time</label>

                                <div className="inline-flex items-center px-2 rounded border border-gray-300" style={{height: "34px"}}>
                                    <select className="" value={endTime[0].toString().padStart(2, '0')} onChange={e => setEndTime([e.target.value, endTime[1]])}>
                                        {
                                            hourChoices.map(h => (
                                                <option value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="mx-3 text-gray-400">|</span>
                                    <select className="px-" value={endTime[1].toString().padStart(2, '0')} onChange={e => setEndTime([endTime[0], e.target.value])}>
                                        {
                                            minuteChoices.map(h => (
                                                <option value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        Reviewer

                        <div className="flex items-center px-2 rounded bg-gray-400 bg-opacity-25 border border-gray-300" style={{height: "34px"}}>
                            <div className="border relative w-6 h-6 rounded-full overflow-hidden">
                                <img className="absolute w-full h-full object-cover" src={reviewer.dp} alt="" />
                            </div>
                            <span className="ml-2 text-sm">{reviewer.full_name}</span>

                            <button className="ml-auto text-blue-900 text-xs p-0" onClick={onClose}>
                                Change
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900">
                            Save Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSession;