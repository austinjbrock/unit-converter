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
let weightDetails = document.getElementById('weightDetails')

// Length Formula
let meterToFoot = userInput * 3.28084.toFixed(4);
let footToMeter = userInput * 0.3048.toFixed(4);

// Length conversion Details
footDetails.textContent = `${userInput} meters = ${meterToFoot} Feet | ${userInput} Feet = ${footToMeter} Meters`



// Volume Formula
let volumeConversion = document.getElementById('volumeConversion')

let literToGallon = userInput * 0.264172.toFixed(4)
let gallonToLiter = userInput * 3.7854.toFixed(4);

volumeDetails.textContent = `${userInput} Liters = ${literToGallon} Gallons | ${userInput} Gallons = ${gallonToLiter} Liters`



//Mass Formulax
let kilosToPounds = userInput * 2.20462
let poundsToKilos = userInput * 0.453592.toFixed(4)



weightDetails.textContent = `${userInput} Kilos = ${kilosToPounds} Pounds | ${userInput} Pounds = ${poundsToKilos} Kilos`
