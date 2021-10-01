import { defaultActivity } from "../constants";
import { addMinutesToTime, formatLink, getTimeFromNumber } from "../utils";

function SingleEmployeeSchedule({ employee, sessions, onClose }) {
    const sortedSessions = sessions.sort((a, b) => a.time - b.time);
    const dialogHeight = Math.min(750, window.innerHeight * 0.85);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="fixed inset-0" onClick={onClose}>

            </div>
            <div className="rounded-lg overflow-y-auto w-full max-w-lg relative z-10"
                style={{maxHeight: dialogHeight}}
            >
                <div className="relative text-white py-3 px-4 flex items-center justify-between">
                    <div className="absolute inset-0 bg-blue-900s bg-primary opacity-70"></div>
                    <div className="flex items-center relative z-10">
                        <div className="border-2 border-opacity-80 relative w-8 h-8 rounded-full overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={employee.dp} alt="" />
                        </div>
                        <h3 className="ml-3">{employee.full_name}</h3>
                    </div>

                    <button className="relative z-10 p-1 hover:bg-white hover:bg-opacity-25 rounded-full" onClick={onClose}>
                        <svg className="w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></svg>
                    </button>
                </div>

                <div className="bg-white p-3">
                    {sortedSessions.map((session) => {
                        let selfReview = session.reviewer._id === session.owner._id;
                        let asReviewer = false;
                        if (!selfReview && session.reviewer._id === employee._id)
                            asReviewer = true;
                        
                        let activity = session.activity.title;
                        if(session.activity._id === defaultActivity)
                            activity = session.title;

                        return (
                            <div key={session._id} className="mb-3">
                                <div className="flex items-start">
                                    <span className="w-32 ml-2 mr-2 flex-shrink-0 text-blue-900">
                                        {getTimeFromNumber(session.time)} - {addMinutesToTime(session.time, session.duration)}
                                    </span>

                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {asReviewer && <span><span className="font-normal">Review</span> {session.owner.full_name}</span>}
                                            {!asReviewer && activity}
                                        </h3>
                                        <p className="text-sm opacity-75"
                                            dangerouslySetInnerHTML={{__html: formatLink(session.description) }}
                                        >
                                            
                                        </p>

                                        {!selfReview && !asReviewer && (
                                            <div className="flex items-center mt-1">
                                                <img style={{ width: "24px", height: "24px", objectFit: "cover", borderRadius: "50%" }}
                                                    title={'Reviewer: ' + session.reviewer.full_name} src={session.reviewer.dp} alt=""
                                                />

                                                <span className="ml-3">
                                                    Reviewer: {session.reviewer.full_name}
                                                </span>
                                            </div>
                                        )}
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

export default SingleEmployeeSchedule;