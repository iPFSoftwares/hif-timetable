import { useEffect, useState } from "react";
import { addMinutesToTime, getNumberFromTimeArray, getTimeFromNumber, numberTimeDiff } from "./utils";
import SearchEmployees from "./SearchEmployees";
import SelectActivity from "./SelectActivity";
import { useMutation } from "react-query";
import ActivityPicker from "./ActivityPicker";
import { defaultActivity } from "./constants";

const hourChoices = [8,9,10,11,12,13,14,15,16];
const minuteChoices = [0, 15, 30, 45];

function EmployeePicker({employee, onChange}){
    const [value, setValue] = useState(employee);
    useEffect(() => {
        if(value && value !== employee)
            onChange(value);
    }, [value]);

    return (
        <>
            { value && (        
                <div className="flex items-center px-2 rounded bg-gray-200 bg-opacity-25 border border-gray-300" style={{height: "34px"}}>
                    <div className="border relative w-6 h-6 rounded-full overflow-hidden">
                        <img className="absolute w-full h-full object-cover" src={value.dp} alt="" />
                    </div>
                    <span className="ml-2 text-sm">{value.full_name}</span>

                    <button className="ml-auto text-blue-900 text-xs p-0" onClick={() => setValue(null)}>
                        Change
                    </button>
                </div>
            )}

            { !value && <SearchEmployees onChange={setValue} /> }
        </>
    );
}

function EditSession({ session, onClose, onSave }) {
    const duration = session.duration;
    const [employee, setEmployee] = useState(session.owner);
    const [reviewer, setReviewer] = useState(session.reviewer);
    const [startTime, setStartTime] = useState(getTimeFromNumber(session.time).split(":").map(digit => Number(digit)));
    const [endTime, setEndTime] = useState([8,30]);
    const [description, setDescription] = useState(session.description);
    const [activity, setActivity] = useState(session.activity && session.activity._id !== "a535186e-5e34-4bc1-872f-d06d7b604613" ? session.activity : null);
    const [title, setTitle] = useState(session.title);

    const mutation = useMutation((updatedUser) =>
        fetch('https://walterkimaro.com/api/Session/' + session._id, {
            method: "PATCH",
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        ).then(res =>res.json()),
        {
            onSuccess: () => {
                onSave();
            },
        }
    );

    const { isLoading, isError, error, isSuccess, data } = mutation;

    useEffect(() => {
        const startTime = getTimeFromNumber(session.time).replace(":", "");
        setEndTime(addMinutesToTime(Number(startTime), duration).split(":").map(digit => Number(digit)));
    }, []);

    function handleSave(){
        const startTimeNumber = getNumberFromTimeArray(startTime);
        const endTimeNumber = getNumberFromTimeArray(endTime);

        const data = {
            time: startTimeNumber,
            duration: numberTimeDiff(endTimeNumber, startTimeNumber),
            title,
            activity: activity ? activity._id : defaultActivity,
            description,
            owner: employee._id,
            reviewer: reviewer._id,
        };

        // onSave(data);
        console.log("Save session:", data);
        mutation.mutate(data);
    }

    return (
        <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="fixed inset-0" onClick={onClose}>

            </div>
            <div className="rounded-md overflow-hidden w-full max-w-sm relative z-10">
                <div className="bg-blue-900 text-white py-3 px-4 flex items-center justify-between">
                    <h3 className="font-semibold">
                        Edit Session
                    </h3>

                    <button className="p-1 hover:bg-white hover:bg-opacity-25 rounded-full" onClick={onClose}>
                        <svg className="w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></svg>
                    </button>
                </div>

                <div className="bg-white py-3 px-4">
                    {
                        isError && <span>Error saving session: {error}</span>
                    }

                    <div className="mb-3">
                        Employee

                        <EmployeePicker employee={employee} onChange={setEmployee} />
                    </div>

                    <div className="mb-4">
                        Activity

                        <ActivityPicker 
                            activity={activity}
                            searchQuery={title}
                            onSearchQueryChange={setTitle}
                            onChange={setActivity} 
                        />
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="flex-1 flex-shrink-0 mr-2">
                                <label>Start Time</label>

                                <div className="inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300" style={{height: "34px"}}>
                                    <select className="" value={startTime[0]} onChange={e => setStartTime([e.target.value, startTime[1]])}>
                                        {
                                            hourChoices.map(h => (
                                                <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="mx-3 text-gray-400">|</span>
                                    <select className="px-" value={startTime[1]} onChange={e => setStartTime([startTime[0], e.target.value])}>
                                        {
                                            minuteChoices.map(h => (
                                                <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="flex-1 flex-shrink-0">
                                <label>End time</label>

                                <div className="inline-flex items-center px-2 rounded bg-gray-100 border border-gray-300" style={{height: "34px"}}>
                                    <select className="" value={endTime[0]} onChange={e => setEndTime([e.target.value, endTime[1]])}>
                                        {
                                            hourChoices.map(h => (
                                                <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                    <span className="mx-3 text-gray-400">|</span>
                                    <select className="px-" value={endTime[1]} onChange={e => setEndTime([endTime[0], e.target.value])}>
                                        {
                                            minuteChoices.map(h => (
                                                <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mb-2">
                        <label>Session Details</label>

                        <textarea type="text" className="w-full py-1 px-2 rounded bg-gray-100 border border-gray-300 resize-y" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        Reviewer

                        <EmployeePicker employee={reviewer} onChange={setReviewer} />
                    </div>

                    <div className="flex justify-end">
                        <button className="mt-3 mb-1 text-sm py-1 px-6 rounded-full border border-blue-900 text-blue-900"
                            onClick={handleSave}
                        >
                            { isLoading ? 'Please Wait...' : 'Save Session' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditSession;