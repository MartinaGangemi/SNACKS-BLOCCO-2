// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

let userNumber = parseInt(prompt("Inserisci un numero"))
if (userNumber % 2 != 0){
    console.log(`il numero pari successivo di ${userNumber} è ${userNumber+1}`)

} else{
     console.log(`${userNumber} è un numero pari`)
}