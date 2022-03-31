
numbersList = [ "4", "8", "7", "5", "33"]
i=0
somma=0
while(i < numbersList.length){
    let number = parseInt(numbersList[i])
    if(i % 2 == 0){
        somma += number
    }

 i++
}

console.log(somma)