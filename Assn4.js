const prompt = required(`prompt-sync`)();


function collect(){
    
}

function max(...numbers){
    let result = -Infinity;
    for (let number of numbers){
        if (number > result) result = number;
    }
    return result;
}

function inputnumber(){
    let input = prompt("Enter a number").toLowerCase();
    let num = input
    while(isNaN(num)){
        console.log(`invalid number`)
        input = Number(prompt("Enter a number"));
        num = input;
    if(input === "done"){
        return num;
        }
    }
}
