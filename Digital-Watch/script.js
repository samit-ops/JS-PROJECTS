const hourdisplay = document.getElementById("hours");
const minutedisplay = document.getElementById("minutes");
const seconddisplay = document.getElementById("seconds");

function updatedisplay(){
    const now = new Date();

  const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    hourdisplay.textContent = hour;
    minutedisplay.textContent = minute;
    seconddisplay.textContent = second;
}
updatedisplay();
setInterval(updatedisplay,1000);