const progressBar = document.querySelector("#bar");

function getProgressBarPercentage(timerDuration, currentTime) {
    const progressBarPercentage = (currentTime*100)/timerDuration;
    return String(progressBarPercentage)+"%";
}