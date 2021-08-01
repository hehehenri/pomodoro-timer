const playButton = document.querySelector("#play-button");
const bodyTime = document.querySelector("#time");
const notification = document.querySelector("#notification");
const phrase = document.querySelector("#phrase");
const pomodoroTimeInSeconds = minutesToSeconds(25);
const restTimeInSeconds = minutesToSeconds(5);
let pomodoro = false;
let timerDuration = 0;
let canStart = true;
phrase.innerHTML = "Hey, click on play to start!";


playButton.addEventListener("click", () => {
    if(canStart) {
        const initialTime = getCurrentDate();
        if(pomodoro) {
            pomodoro = false;
            timerDuration = restTimeInSeconds;
            bodyTime.innerHTML = secondsToClockFormat(timerDuration);
            phrase.innerHTML = "You should take a break now!";
        } else {
            notification.play();
            timerDuration = pomodoroTimeInSeconds;
            bodyTime.innerHTML = secondsToClockFormat(timerDuration);
            phrase.innerHTML = "It's time to work!";
        }
        let teste = setInterval(()=> {
            canStart = false;
            const currentTime = getCurrentDate();
            const pastTimeInMilliseconds = getPastTimeInMilliseconds(initialTime, currentTime);
            const pastTimeInSeconds = millisecondsToSeconds(pastTimeInMilliseconds);
            const remainingTimeInSeconds = timerDuration - pastTimeInSeconds;
            const remaingngTimeInClockFormat = secondsToClockFormat(remainingTimeInSeconds);
            bodyTime.innerHTML = remaingngTimeInClockFormat;
            if(remainingTimeInSeconds == 0) {
                clearInterval(teste);
                notification.play();
                canStart = true;
                pomodoro ? pomodoro = false : pomodoro = true;
            }
        }, 1000)
    }
})