import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { defaultActivity, BASE_URL } from "../constants";
import { addMinutesToTime, confirmPassword, getTimeFromNumber } from "../utils";

const SessionTile = ({ session, employee, forAll = false, onEdit, onDelete }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const [shiftSelected, setShiftSelected] = useState(false);
    const [deleting, setDeleting] = useState(false);

    let selfReview = session.reviewer._id === session.owner._id;
    let asReviewer = false;
    if (!selfReview && session.reviewer._id === employee._id)
        asReviewer = true;

    let rowStart = 1, rowEnd = 1;
    let timeDiff = Math.round((session.time - 800) / 100) * 100;
    let colStart = (timeDiff / 25) + 1;
    colStart += ((session.time - 800) % 100) / 15;
    let colEnd = colStart + (session.duration / 15);
    let gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

    const canDelete = mouseOver && shiftSelected;

    let activity = session.activity.title;
    if(session.activity._id === defaultActivity)
        activity = session.title;

    const onLeave = activity == "Leave";

    useEffect(() => {
        window.addEventListener("shift-released", shiftReleased, false);
        window.addEventListener("shift-selected", onShiftSelected, false);
        return () => {
            console.log("Listener removed from tile");
            window.removeEventListener("shift-released", shiftReleased, false);
            window.removeEventListener("shift-selected", onShiftSelected, false);
        };
    }, []);

    const deleter = useMutation(() => fetch(`${BASE_URL}/Session/${session._id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res =>res.json()), {
        onSuccess: () => {
            setDeleting(false);
            onDelete();
        },
    });

    function shiftReleased(e){
        console.log("Shift release captured");
        setShiftSelected(false);
    }

    function onShiftSelected(e){
        console.log("Shift release captured");
        setShiftSelected(true);
    }

    async function handleDeleteSession(){
        try {
            await confirmPassword();
            setDeleting(true);
            deleter.mutate();
        } catch (error) {
        
        }
    }

    async function handleEditSession(){
        try {
            await confirmPassword();
            onEdit(session);
        } catch (error) {
        
        }
    }

    return (
        <div className={`session-card pointer-events-auto cursor-pointer ${forAll && 'for-all'} bg-primary text-white relative ${onLeave && 'on-leave'} ${deleting && 'animate-pulse'}`} style={{ gridArea }}
            onMouseOver={(e) => setMouseOver(true)}
            onMouseLeave={_ => setMouseOver(false)}
            onClick={_ => canDelete ? handleDeleteSession() : handleEditSession()}
        >
            {(canDelete || deleting) &&
                <div className="z-10 bg-red-500 absolute inset-0 flex items-center px-2 text-xs">
                    { deleting ? 'Removing Session...' : 'Remove Session' }
                </div>
            }

            { !forAll && !onLeave && (
                <div>
                    <div className="truncate opacity-80" style={{ fontSize: "10px" }}>
                        {getTimeFromNumber(session.time)} - {addMinutesToTime(session.time, session.duration)}
                    </div>
                    <h3 className="mt-0.5">
                        {asReviewer &&
                            <span>Review {session.owner.full_name}</span>
                        }
                        {!asReviewer && activity}
                    </h3>
                    {!selfReview && !asReviewer && (
                        <div style={{ marginTop: "0.15rem", display: "flex", alignItems: "center", fontSize: "13px" }}>
                            <img style={{ width: "20px", height: "20px", objectFit: "cover", borderRadius: "50%" }}
                                title={'Reviewer: ' + session.reviewer.full_name} src={session.reviewer.dp} alt=""
                            />
                        </div>
                    )}
                </div>
            )}

            { forAll && (
                <div className="flex items-center justify-center h-full uppercase font-bold text-lg">
                    <span className="opacity-20"
                        dangerouslySetInnerHTML={{__html: activity.split('').join('</br>') }}
                    ></span>
                </div>
            )}
        </div>
    );
}

export default SessionTile;