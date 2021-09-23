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