// Grab User input for unit conversion
// Display User input in bold
//automatically convert input to desired units
//update details as soon as units are received

const userInput = prompt('Enter Number')
let largeUnitDisplay = document.getElementById('inputUnitDisplay')

largeUnitDisplay.innerText = userInput;

//display Unit details
let footDetails = document.getElementById('footDetails');
let volumeDetails = document.getElementById('volumeDetails')
let weightDetails = document.getElementById('weighDetails')

// Length Formula
let meterToFoot = userInput * 3.28084.toFixed(3);
let footToMeter = userInput * 0.3048.toFixed(1);

// Length conversion Details
footDetails.textContent = `${userInput} meters = ${meterToFoot} Feet | ${userInput} Feet = ${footToMeter} Meters`



// Volume Formula
let volumeConversion = document.getElementById('volumeConversion')

let literToGallon = userInput * 0.26; 
let gallonToLiter = userInput * 3.7854;

volumeDetails.textContent = `${userInput} Liters = ${literToGallon} Gallons | ${userInput} Gallons = ${gallonToLiter} Liters`




//Mass Formula
let weightConversion = document.getElementById('weightConversion')

