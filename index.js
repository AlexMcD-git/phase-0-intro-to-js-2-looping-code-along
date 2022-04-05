// Code your solutions in this file
const names= []

function writeCards(names, event){
    let newArray= []
    for(let i =  0; i < names.length; i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return newArray
}
function countDown(number){
    while (number>=0){
        console.log(number)
        number--
    }
}