export const getTimeFromNumber = (number) => {
    var numArray = number.toString().split('');
    var hour = [...numArray].reverse().slice(2).reverse().join('');
    var min = numArray.slice(-2).join('');
    return `${hour.padStart(2, '0')}:${min.padStart(2, '0')}`;
}

export const getNumberFromTimeArray = ([hrs,mins]) => {
    hrs = hrs.toString().padStart(2, '0');
    mins = mins.toString().padStart(2, '0');
    var time = getTimeFromNumber(Number(`${hrs}${mins}`));
    return Number(time.replace(':', ''));
}

export const numberTimeDiff = (larger, smaller) => {
    let [lh, lm] = getTimeFromNumber(larger).split(":");
    let [sh, sm] = getTimeFromNumber(smaller).split(":");

    var hourDiff = lh-sh;
    var minDiff = lm-sm;

    return (hourDiff*60) + minDiff;
}

export const addMinutesToTime = (number, duration) => {
    var [hours, minutes] = getTimeFromNumber(number).split(":");
    var totalMinutes = Number(minutes)+Number(duration);
    var addedHours = Math.floor(totalMinutes / 60);
    hours = (Number(hours) + addedHours).toString();
    minutes = (totalMinutes % 60).toString();
    
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

export const getTimeFromRow = (row) => {
    var number = row - 1;
    var rowValue = (Math.floor(number / 4) + 8) * 100;
    rowValue += Math.floor(number % 4) * 15;
    var [hours, mins] = getTimeFromNumber(rowValue).split(":");
    return `${hours.padStart(2, '0')}:${mins}`;
}

export function formatLink(content){
    if(!content || !content.length) return "";
    const exp_match = /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const element_content=content.replace(exp_match, `<a class="text-blue-900" target="_blank" href='$1'>$1</a>`);
    const new_exp_match =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
    return element_content.replace(new_exp_match, '$1<a target="_blank" href="http://$2">$2</a>');
}

export async function confirmPassword(){
    return new Promise((res, rej) => {
        const passwordSet = window.localStorage.getItem("PASSWORD_SET");
        if(passwordSet)
            res(true);
        else{
            window.showConfirmDialog("HIF-2021", {
                onOkay: () => {
                    window.localStorage.setItem("PASSWORD_SET", true);
                    res();
                },
                onCancel: () => {
                    rej();
                },
            });
        }
    });
}

export function getEmployeeSessions(sessions, employeeId){
    if(!sessions || !sessions.length)
      return [];

    return sessions.filter(session => {
      return session.owner._id === employeeId || session.reviewer._id === employeeId;
    }).sort((a, b) => a.time - b.time);
}