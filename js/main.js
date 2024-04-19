//richiamo button
const button = document.getElementById ('button');

//richiamo dati
const nameInput = document.getElementById ('name');
const kmInput = document.getElementById ('km');
const ageInput = document.getElementById ('age');

//evento al click
button.addEventListener('click',function() {

console.log('kmInput.value', kmInput.value, typeof kmInput.value);
console.log('ageInput.value', ageInput.value, typeof ageInput.value);
console.log('nameInput.value',nameInput.value, typeof nameInput.value);


const costoPerKm = 0.21;
const basePrice = kmInput.value * costoPerKm;
console.log ('Prezzo base biglietto', basePrice);

let finalPrice = basePrice

//sconti vari//
if (ageInput.value < 18) {
    finalPrice = basePrice * 0.80;
    console.log("sotto i 18 paghi:", finalPrice);
}
else if (ageInput.value > 65) {
    finalPrice = basePrice * 0.60;
    console.log("sopra i 65 paghi:", finalPrice);
}


console.log('Prezzo finale:', finalPrice.toFixed(2));



})