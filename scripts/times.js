function getTime() {

}

function getCurrentDate() {
    const date = new Date();
    return date;
}

function getPastTimeInMilliseconds(initialTime, currentTime) {
    const pastTime = Math.abs(currentTime - initialTime);
    return pastTime;
}

function millisecondsToSeconds(timeInMilliseconds) {
    const timeInSeconds = parseInt((timeInMilliseconds /1000).toFixed(0));
    return timeInSeconds;
}

function minutesToSeconds(timeInMinutes) {
    const timeInSeconds = timeInMinutes*60;
    return timeInSeconds;
}

function secondsToClockFormat(remainingSeconds) {
    const clockMinutes = Math.floor(remainingSeconds / 60);
    const clockSeconds = remainingSeconds - (clockMinutes*60);
    const clockTime = `${formatTime(clockMinutes)}:${formatTime(clockSeconds)}`
    return clockTime;
}

function formatTime(time) {
    time < 10 ? time = "0" + String(time) : null;
    return time
}