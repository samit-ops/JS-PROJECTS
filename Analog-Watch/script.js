const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondhand = document.querySelector('.second-hand');

function updateClock(){
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds(); 

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    secondhand.style.transform = "rotate(" + secondAngle + "deg)";
    hourHand.style.transform = "rotate(" + hourAngle + "deg)";
    minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
}

updateClock();
setInterval(updateClock, 1000);