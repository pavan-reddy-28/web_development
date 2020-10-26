var milli=0;
 var secs=0;
 var mins=0;
 var hours =0;
 var flag=false


 setInterval(() => {
stopWatch(flag)
 }, 10);


function startButton(){
        flag=true;
        document.getElementById("start").disabled=true;
        document.getElementById("pause").disabled=false;
        document.getElementById("stop").disabled=false;

}
function stopButton(){
     flag=false;
     milli=secs=mins=hours=0;
     changeText("milliSeconds",milli);
     changeText("seconds",secs);
     changeText("minutes",mins);
     changeText("hours",hours);
     



     document.getElementById("start").disabled=false;
     document.getElementById("stop").disabled=true;
     document.getElementById("pause").disabled=true;
     //milli=secs=mins=hours=0;

}
function pauseButton(){
    flag=flag?false:true;
}

 function stopWatch(flag){
    if(flag){
        setMilliseconds();
    }
}



function setMilliseconds(){
   if(milli<100){
        milli+=1;  
   }else{
       milli=0;
       setSeconds();
   }
   changeText("milliSeconds",milli);
}
function setSeconds(){
    if (secs <59){
        secs+=1;
       
    }else{
        secs=0
        setMinutes();
    }
    changeText("seconds",secs);
}
function setMinutes(){
    if (mins <60){
        mins+=1;
       
    }else{
        mins=0;
        setHours();
    }
    changeText("minutes",mins);
}
function setHours(){
    if (hours <24){
        hours+=1;
        
    }else{
        hours=0;
    }
    changeText("hours",hours);
}
function changeText(id,value){
    document.getElementById(id).innerHTML=""+value;
}
