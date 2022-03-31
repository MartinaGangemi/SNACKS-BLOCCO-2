// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.




// creo un ciclo dove chiedo all'utente di inserire un numero, 
// continuo a chiederlo finchè non mi inserisce un numero pari

// let userNumber 
// index=0

// while (index = userNumber %2==0 ){
//     let userNumber = parseInt(prompt("Inserisci un numero"))
//     if (userNumber %2 !=0 ){
//         alert("inserisci un numero pari!")
//     } else{
//         console.log(`${userNumber} è un numero pari`)
//     }
    
//     index++
// }

let userNumber = parseInt(prompt("Inserisci un numero"))
if (userNumber % 2 != 0){
    console.log(`il numero pari successivo di ${userNumber} è ${userNumber+1}`)

} else{
     console.log(`${userNumber} è un numero pari`)
}