
const display = document.getElementById("showClock");

function clocktiming(){
    let d = new Date();
    let x = d.toLocaleTimeString();
    display.innerHTML= x
}

let clock = setInterval(clocktiming, 1000)

// On Loading
clocktiming();

