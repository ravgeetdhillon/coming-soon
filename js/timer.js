// var countDownDate = new Date("Oct 26, 2018 09:00:00").getTime();
// you can set the Actual countdown date above

var countDownDate = new Date().getTime();
countDownDate = countDownDate + 1002*36*42*12*57;

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(days >= 10){
        document.getElementById("d").innerHTML = days;
    }
    else{
        document.getElementById("d").innerHTML ='0' + days;
    }
    if(hours >= 10){
        document.getElementById("h").innerHTML = hours;
    }
    else{
        document.getElementById("h").innerHTML ='0' + hours;
    }
    if(minutes >= 10){
        document.getElementById("m").innerHTML = minutes;
    }
    else{
        document.getElementById("m").innerHTML ='0' + minutes;
    }
    if(seconds >= 10){
        document.getElementById("s").innerHTML = seconds;
    }
    else{
        document.getElementById("s").innerHTML ='0' + seconds;
    }   
}, 1000);