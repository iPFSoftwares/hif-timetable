import { addMinutesToTime, getTimeFromNumber } from "./utils";

function SingleEmployeeSchedule({ employee, sessions, onClose }) {
    const sortedSessions = sessions.sort((a, b) => a.time - b.time);

    return (
        <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="fixed inset-0" onClick={onClose}>

            </div>
            <div className="rounded-lg overflow-hidden w-full max-w-lg relative z-10">
                <div className="bg-blue-900 text-white py-3 px-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="border relative w-8 h-8 rounded-full overflow-hidden">
                            <img className="absolute w-full h-full object-cover" src={employee.dp} alt="" />
                        </div>
                        <h3 className="ml-3">{employee.full_name}</h3>
                    </div>

                    <button className="p-1 hover:bg-white hover:bg-opacity-25 rounded-full" onClick={onClose}>
                        <svg className="w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /></svg>
                    </button>
                </div>

                <div className="bg-white p-3">
                    {sortedSessions.map((session) => {
                        let selfReview = session.reviewer._id === session.owner._id;
                        let asReviewer = false;
                        if (!selfReview && session.reviewer._id === employee._id)
                            asReviewer = true;

                        return (
                            <div key={session._id} className="mb-3">
                                <div className="flex items-start">
                                    <span className="w-32 ml-2 mr-2 flex-shrink-0 text-blue-900">
                                        {getTimeFromNumber(session.time)} - {addMinutesToTime(session.time, session.duration)}
                                    </span>

                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {asReviewer && <span><span className="font-normal">Review</span> {session.owner.full_name}</span>}
                                            {!asReviewer && session.activity.title}
                                        </h3>
                                        <p className="text-sm opacity-75">
                                            {session.description}
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