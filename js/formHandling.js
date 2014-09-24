// formHandling.js
// Author: Brian Newsom
// Date: 9/24/2014
// Javascript handler for html form element in index.html

function calculateCosts() {
	distance = document.forms["Input"]["distance"].value;
	mileage = document.forms["Input"]["mileage"].value;
	passengers = document.forms["Input"]["passengers"].value;
	gasPrice = document.forms["Input"]["gasPrice"].value;
	unRounded = distance/mileage * gasPrice / passengers; 
	rounded = Math.round(unRounded * 100) / 100;
	return rounded;
}
function enterForm() { 
	$('#returnVal').text('This trip costs $' + calculateCosts() + ' per person.');
}

