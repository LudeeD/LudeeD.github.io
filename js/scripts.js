
var compliments = ["funny", "interesting", "awesome", "lazy"]
var currIndex = 0
window.setInterval(dispatchFunction, 2000);

function dispatchFunction(){

  if (currIndex === compliments.length) currIndex = 0

  choosen = compliments[currIndex];
  currIndex += 1

  document.getElementById("changeable").innerHTML = ""+ choosen;
}
