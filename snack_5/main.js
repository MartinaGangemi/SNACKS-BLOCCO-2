// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno
//  elementi fino a quando ne avrà tanti quanti l’altro.
numbersList1 = [ "4", "8", "7", "5", "33"]
numbersList2 = ["55", "99"]

const lengthDifference = numbersList1.length - numbersList2.length
console.log(lengthDifference)
console.log(numbersList2)
i=0
somma=0

while(i < lengthDifference){
    const randomNumber = Math.floor(Math.random ()*100)
    console.log(randomNumber)
    numbersList2.push(randomNumber)
    console.log(numbersList2)
 i++
}