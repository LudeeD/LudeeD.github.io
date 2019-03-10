var compliments = ["funny", "interesting", "awesome", "lazy","nice"]
var currIndex = 0

function dispatchFunction(){
    if (currIndex === compliments.length) currIndex = 0
    choosen = compliments[currIndex];
    currIndex += 1
    document.getElementById("changeable").innerHTML = ""+ choosen;
}


var currTime = new Date();

var day = currTime.getDay();
var month = currTime.getMonth();
var year = currTime.getFullYear()

var my_age = year - 1996 - 1;

if (month == 11){
    console.log("month december");
    if( day >= 19){
        my_age = my_age + 1;
    }
}

document.getElementById("time-elapsed").innerHTML = ""+my_age+" years";
window.setInterval(dispatchFunction, 2000);
