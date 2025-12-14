function clock(){
    let calendar = new Date();

    let hours = calendar.getHours();
    let mins = calendar.getMinutes();
    let seconds = calendar.getSeconds();
    let period = "AM"

   if (hours >=12){
    period = "PM";
   }

   if(hours < 10){
    hours = "0" + hours;
   }
   
   if(seconds < 10){
    seconds = "0" + seconds;
   }

   
   if(mins < 10){
    mins = "0" + mins;
   }

    document.querySelector(".hours").innerHTML= hours;
    document.querySelector(".mins").innerHTML= mins;
    document.querySelector(".seconds").innerHTML= seconds;
    document.querySelector(".period").innerHTML= period;

       let message = "";

    if (calendar.getHours() >= 0 && calendar.getHours() < 7) {
        message = "Time to rest. Turn off and continue tomorrow.";
    } else if (calendar.getHours() >= 7 && calendar.getHours() < 12) {
        message = "Good morning! Have a hearty breakfast and get coding.";
    } else if (calendar.getHours() >= 12 && calendar.getHours() < 14) {
        message = "Take a break but don’t forget to eat.";
    } else if (calendar.getHours() >= 14 && calendar.getHours() < 16) {
        message = "Hope you’ve eaten!";
    } else if (calendar.getHours() >= 16 && calendar.getHours() < 18) {
        message = "Good afternoon, last push of the day.";
    } else if (calendar.getHours() >= 18 && calendar.getHours() < 22) {
        message = "Maybe it is time to start unwinding";
    } else if (calendar.getHours() >= 22 && calendar.getHours() <= 23) {
        message = "Good night! Time to rest.";
    }

   
    document.querySelector(".time-message").innerHTML = message;
}

var updateClock = setInterval(clock, 1000);

var today = new Date ();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".month-name").innerHTML= monthName;
document.querySelector(".day-name").innerHTML= dayName;
document.querySelector(".day-number").innerHTML= dayNumber;
document.querySelector(".year").innerHTML= year;
