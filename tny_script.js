/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Jorge Collazo
   Date:   1-06-20

*/
runClock();

function runClock(){
//Display time left before New years Eve

var currentYear = new Date();

var dateStr = currentYear.toDateString();
var timeStr = currentYear.toLocaleDateString();

var newYear = new Date("January 1, 2021");
var nextYear = currentYear.getFullYear()+1;
newYear.setFullYear(nextYear);

var daysLeft = (newYear - currentYear)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.ceil(secsLeft);
}


/*function calcArea(length, width){
   var area = length*width;
   return area;
}

var squareArea = calcArea(10, 10)

console.log(squareArea);*/

function distance(x1, y1, x2, y2){
   var dist = Math.SQRT1_2(Math.pow(x2-x1)+Math.pow(y2-y1));
   return dist;
}

var five =  distance(1,1,4,5 ) 

console.log(five(1,1,4,5))