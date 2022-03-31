// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno
//  elementi fino a quando ne avrà tanti quanti l’altro.
// numbersList1 = [ "4", "8", "7", "5", "33"]
// numbersList2 = ["55", "99"]
// const lengthDifference = numbersList1.length - numbersList2.length

// i=0


// while(i < lengthDifference){
//     const randomNumber = Math.floor(Math.random ()*100)
//     numbersList2.push(randomNumber)
//     console.log(numbersList2)
//  i++
// }


// Se devo scegliere in quale lista devo aggiungere gli alementi
numbersList2 = [ "4", "8", "7", "5", "33"]
numbersList1 = ["55", "99"]

// se la lunghezza di lista uno è maggiore di lista due
 if (numbersList1.length> numbersList2.length){
    const lengthDifference = numbersList1.length - numbersList2.length
    
    i=0

 while(i < lengthDifference){
    const randomNumber = String(Math.floor(Math.random ()*100))
    //aggiungo randomNumber in lista 2
    numbersList2.push(randomNumber)
    console.log(numbersList2)
  i++
}
// se la lunghezza di lista uno è minore di lista due
    } else if (numbersList1.length < numbersList2.length){
        const lengthDifference = numbersList2.length - numbersList1.length
        i=0
        while(i < lengthDifference){
            const randomNumber = String(Math.floor(Math.random ()*100))
            
            //aggiungo randomNumber in lista 1
            numbersList1.push(randomNumber)
            console.log(numbersList1)
        i++
        } 
}
