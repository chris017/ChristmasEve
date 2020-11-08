const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');


const xmas = "24 Dec 2020";

function countdown() {
    const xmasDate = new Date(xmas);
    const currentDate = new Date();
    
    const totalSeconds = (xmasDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = mins;
    secondsEL.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);