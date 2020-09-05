var compliments = ["funny", "interesting", "awesome", "lazy", "nice", "a GIT lover"]
var currIndex = 0

function dispatchFunction(){
    if (currIndex === compliments.length) currIndex = 0
    choosen = compliments[currIndex];
    currIndex += 1
    document.getElementById("changeable").innerHTML = ""+ choosen;
}

function getAge(){
    var currDate = new Date();
    var birthDate = new Date(1996,12,19);

    var secDiff = (currDate - birthDate) / 1000;

    let years = Math.trunc(secDiff / 31536000);

    return years;
}

document.getElementById("time-elapsed").innerHTML = ""+getAge()+" years";
window.setInterval(dispatchFunction, 2000);
