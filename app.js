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
let meterToFoot = userInput * 3.28084.toFixed(2);
let footToMeter = userInput * 0.3048.toFixed(2);

// Length conversion Details
footDetails.textContent = `${userInput} meters = ${meterToFoot} Feet OR ${userInput} Feet = ${footToMeter} Meters`



// Volume Formula
let volumeConversion = document.getElementById('volumeConversion')

let literToGallon = userInput * 0.264
let gallonToLiter = userInput * 3.7854.toFixed(2);

volumeDetails.textContent = `${userInput} Liters = ${literToGallon} Gallons OR ${userInput} Gallons = ${gallonToLiter} Liters`



//Mass Formulax
let kilosToPounds = userInput * 2.20.toFixed(2)
let poundsToKilos = userInput * 0.453592.toFixed(2)



weightDetails.textContent = `${userInput} Kilos = ${kilosToPounds} Pounds OR ${userInput} Pounds = ${poundsToKilos} Kilos`
