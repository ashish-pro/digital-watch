let clock = setInterval(clocktiming, 1000)
function clocktiming(){
    let d = new Date();
    let x = d.toLocaleTimeString();
    document.getElementById("showClock").innerHTML= x
}

let flag = 0

function play(){
    if(flag == 0){
        
        document.getElementById("btnt").innerHTML = "Start the Watch"
        clearInterval(clock);
        console.log("if statement")
        flag = 1
    }
    else{
        setInterval(clocktiming, 1000)
        document.getElementById("btnt").innerHTML = "Stop the Watch"
        console.log("else statement")
        flag = 0
    }
}


