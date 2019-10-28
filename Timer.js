var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);
   let secondsHolder;
   let minuteHolder;
   let hourHolder;

   if(seconds < 10)
   {
       secondsHolder = "0" + seconds;
   }else
   {secondsHolder = seconds}

   if(minute < 10)
   {
    minuteHolder = "0" + minute;
   }else{
    minuteHolder = minute;
   }

   if(hour < 10)
   {
       hourHolder = "0" + hour;
   }else{
       hourHolder = hour;
   }

    document.getElementById("timer").innerHTML = hourHolder + ":" + minuteHolder + ":" + secondsHolder;

}
