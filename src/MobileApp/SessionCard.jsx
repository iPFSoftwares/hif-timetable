import { defaultActivity } from "../constants";
import { addMinutesToTime, formatLink, getTimeFromNumber } from "../utils";

const SessionCard = ({session, employee}) => {
    let selfReview = session.reviewer._id === session.owner._id;
    let asReviewer = false;
    if (!selfReview && session.reviewer._id === employee._id)
        asReviewer = true;
    
    let activity = session.activity.title;
    if(session.activity._id === defaultActivity)
        activity = session.title;

    return (
        <div key={session._id} className="mb-3">
            <div className="pb-4 border-b overflow-hidden flexs items-start">
                <span className="flex-shrink-0 text-blue-900">
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
}
 
export default SessionCard;