const hourdisplay = document.getElementById("hours");
const minutedisplay = document.getElementById("minutes");
const seconddisplay = document.getElementById("seconds");

const stopbutton = document.getElementById("stop");
const resetbutton = document.getElementById("reset");
const startbutton = document.getElementById("start");

let elapsedseconds = 0;
let timerid = null;

function updatedisplay(){
    const hours = Math.floor(elapsedseconds / 3600);
    const minutes = Math.floor((elapsedseconds % 3600) / 60);
    const seconds = elapsedseconds % 60;

    hourdisplay.textContent = String(hours).padStart(2,"0");
    minutedisplay.textContent = String(minutes).padStart(2,"0");
    seconddisplay.textContent = String(seconds).padStart(2,"0");
}

startbutton.addEventListener("click", () => {

    if(timerid != null) return;

    timerid = setInterval(() => {
        elapsedseconds++;
        updatedisplay();
    },1000);
});

stopbutton.addEventListener("click", () => {
    clearInterval(timerid);
    timerid = null;
});

resetbutton.addEventListener("click",() =>{
    clearInterval(timerid);
    timerid = null;
    elapsedseconds =0;
    updatedisplay();
});