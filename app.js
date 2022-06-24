// Grab User input for unit conversion
// Display User input in bold
//automatically convert input to desired units
//update details as soon as units are received

const userInput = prompt('Enter Number')
const largeUnitDisplay = document.getElementById('inputUnitDisplay')

largeUnitDisplay.innerText = userInput;

//display Unit details
const footDetails = document.getElementById('footDetails');
const volumeDetails = document.getElementById('volumeDetails')
const weightDetails = document.getElementById('weightDetails')

// Length Formula
const meterToFoot = userInput * 3.28084.toFixed(2);
const footToMeter = userInput * 0.3048.toFixed(2);

// Length conversion Details
footDetails.textContent = `${userInput} meters = ${meterToFoot} Feet OR ${userInput} Feet = ${footToMeter} Meters`



// Volume Formula
const volumeConversion = document.getElementById('volumeConversion')

const literToGallon = userInput * 0.264
const gallonToLiter = userInput * 3.7854.toFixed(2);

volumeDetails.textContent = `${userInput} Liters = ${literToGallon} Gallons OR ${userInput} Gallons = ${gallonToLiter} Liters`



//Mass Formulax
const kilosToPounds = userInput * Math.round(2.20)
const poundsToKilos = userInput * 0.453592.toFixed(2)



weightDetails.textContent = `${userInput} Kilos = ${kilosToPounds} Pounds OR ${userInput} Pounds = ${poundsToKilos} Kilos`
