//declare water constants
const boils = "212";
const freezes = "32";

//print water temps immediately into span element
document.getElementById("boiling-temp").innerHTML = boils;
document.getElementById("freezing-temp").innerHTML = freezes;

//pull current water temp
let current = "51";

//print current water temp into the span
document.getElementById("water-temp").innerHTML = current;


window.onload=function() 
{
	setTimeout(goodtemp, 3000);

};
function goodtemp()
{
	document.getElementById("good-temp").className="show";
}
