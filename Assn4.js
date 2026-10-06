const prompt = required(`prompt-sync`)();


function max(){
    
}


function inputnumber(){
    let input = Number(prompt("Enter a number"));
    let num = input
    while(isNaN(num)){
        console.log(`invalid number`)
        input = Number(prompt("Enter a number"));
        num = input;
    }
    return num;
}
