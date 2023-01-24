setInterval(setDate,1000);
function setDate(){
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    let am_pm = "AM";
    if (hours > 12){
        am_pm = "PM" ; 
        hours -= 12 ; 
    }
    if (hours === 0){
        hours = 12;
    }
    if (secs < 10){
        secs = "0" + secs;
    }
    if (mins < 10){
        mins = "0" + mins;
    }
    let stime = hours + " : " + mins + " : " + secs + " " + am_pm;
    document.getElementById("clock").innerText = stime;
}

setDate();