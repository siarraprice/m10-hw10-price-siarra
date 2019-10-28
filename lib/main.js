"use strict";

//declare water constants
var boils = "212";
var freezes = "32";

//print water temps immediately into span element
document.getElementById("boiling-temp").innerHTML = boils;
document.getElementById("freezing-temp").innerHTML = freezes;

//pull current water temp
var current = "51";

//print current water temp into the span
document.getElementById("water-temp").innerHTML = current;

window.onload = function () {
	setTimeout(goodtemp, 3000);
};
function goodtemp() {
	document.getElementById("good-temp").className = "show";
}