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
            timerDuration = restTimeInSeconds;
            bodyTime.innerHTML = secondsToClockFormat(timerDuration);
            phrase.innerHTML = "You should take a break now!";
        } else {
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
            const progressBarPercentage = getProgressBarPercentage(timerDuration, pastTimeInSeconds);
            bodyTime.innerHTML = remaingngTimeInClockFormat;
            progressBar.style.width = progressBarPercentage;
            if(remainingTimeInSeconds == 0) {
                clearInterval(teste);
                notification.play();
                canStart = true;
                if(pomodoro) {
                    pomodoro = false;
                    phrase.innerHTML = "It's time to work!";
                }
                else {
                    pomodoro = true;
                    phrase.innerHTML = "You should take a break now!";
                }
            }


        }, 1000)
    }
})