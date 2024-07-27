let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset")

let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#second");

let secondVal = 0;
let minuteVal = 0;
let hourVal = 0;
let intervalId;

const resetTime = () =>{
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
    console.log("Hello")
    minuteVal = 0;
    hourVal = 0;
    secondVal = 0;
    start.disabled = false;
    clearInterval(intervalId);
    console.log("Hello");
}
reset.addEventListener("click", resetTime)

const secondIncrement = () =>{
        start.disabled = true;
        secondVal++;
        if(secondVal<10){
            seconds.innerText = `0${secondVal}`
        }
        else{
            seconds.innerText = secondVal;
        }
        if(secondVal==60){
            secondVal = 0;
            seconds.innerText = "00"

            minuteVal++;
            if(minuteVal<10){
                minutes.innerText = `0${minuteVal}`;
            }
            else{
                minutes.innerText = minuteVal;
            }
            if(minuteVal==60){
                minuteVal = 0;
                minutes.innerText = "00";
                hourVal++;
                if(hourVal<10){
                    hours.innerText = `0${hourVal}`;
                }
                else{
                    hours.innerText = hourVal;
                }
            }
        }

}

const startTime = () =>{
    intervalId = setInterval(secondIncrement,1000);
}
start.addEventListener("click", startTime);


const stopTime = () =>{
    start.disabled = false;
    clearInterval(intervalId);
    console.log("Hello")
}
stop.addEventListener("click", stopTime);