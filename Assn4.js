const prompt = require('prompt-sync')();

let numbers = collect();

let x = max(numbers);
console.log(x);


function collect(){
    let x = 0, y = [];
    while(x !== "done"){
        x = inputnumber();
        if(isNaN(x)){
            return y;
        }
        else{
            y.push(x);
        }
    }
    return y;
}

function max(numbers){
    let result = -Infinity;
    for (let number of numbers){
        if (number > result){
            result = number;
        }
    }
    if(result == -Infinity){
        result = "Null";
    }
    return result;
}

function inputnumber(){
    let input = prompt("Enter a number: Type done when finished.").toLowerCase();
    let num = input
    while(isNaN(num)){
        if(input === "done"){
            return num;
        }
        console.log(`invalid number`)
        input = prompt("Enter a number: Type done when finished.").toLowerCase();
        num = input;
    }
    num = Number(num);
    return num;
}
