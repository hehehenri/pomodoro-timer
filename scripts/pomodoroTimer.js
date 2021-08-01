const playButton = document.querySelector("#play-button");
const bodyTime = document.querySelector("#time");
const notification = document.querySelector("#notification");
const phrase = document.querySelector("#phrase");
const pomodoroTimeInSeconds = minutesToSeconds(2);
const restTimeInSeconds = minutesToSeconds(1);
let pomodoro = false;
let timerDuration = 0;
phrase.innerHTML = "Hey, click on play to start!";


playButton.addEventListener("click", () => {
    const initialTime = getCurrentDate();
    if(pomodoro) {
        pomodoro = false;
        timerDuration = restTimeInSeconds;
        bodyTime.innerHTML = secondsToClockFormat(timerDuration);
        phrase.innerHTML = "You should take a break now!";
    }
    else {
        pomodoro = true;
        timerDuration = pomodoroTimeInSeconds;
        bodyTime.innerHTML = secondsToClockFormat(timerDuration);
        phrase.innerHTML = "It's time to work!";
    }
    let teste = setInterval(()=> {
        const currentTime = getCurrentDate();
        const pastTimeInMilliseconds = getPastTimeInMilliseconds(initialTime, currentTime);
        const pastTimeInSeconds = millisecondsToSeconds(pastTimeInMilliseconds);
        const remainingTimeInSeconds = timerDuration - pastTimeInSeconds;
        const remaingngTimeInClockFormat = secondsToClockFormat(remainingTimeInSeconds);
        bodyTime.innerHTML = remaingngTimeInClockFormat;
        if(remainingTimeInSeconds == 0) {
            clearInterval(teste);
            notification.play();
        }
    }, 1000)
})