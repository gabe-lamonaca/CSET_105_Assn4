const prompt = require('prompt-sync')();

// let numbers = collect();

// let x = max(numbers);
// console.log(x);


// function collect(){
//     let x = 0, y = [];
//     while(x !== "done"){
//         x = inputnumber();
//         if(isNaN(x)){
//             return y;
//         }
//         else{
//             y.push(x);
//         }
//     }
//     return y;
// }

// function max(numbers){
//     let result = -Infinity;
//     for (let number of numbers){
//         if (number > result){
//             result = number;
//         }
//     }
//     if(result == -Infinity){
//         result = "Null";
//     }
//     return result;
// }

// function inputnumber(){
//     let input = prompt("Enter a number: Type done when finished.").toLowerCase();
//     let num = input
//     while(isNaN(num)){
//         if(input === "done"){
//             return num;
//         }
//         console.log(`invalid number`)
//         input = prompt("Enter a number: Type done when finished.").toLowerCase();
//         num = input;
//     }
//     num = Number(num);
//     return num;
// }

// Second bullet
// z = flip()

// function flip(){
//     let x =  inputnumber();
//     y = x.indexOf("-");
//     if(y == -1){
//         x = x.split('').reverse().join(``);
//         console.log(x)
//     }
//     else{
//         x = x.substring(1);
//         x = x.split('').reverse().join(``);
//         x = "-" + x
//         console.log(x);
//     }
// }

// function inputnumber(){
//     let input = prompt("Enter a number: ").toLowerCase();
//     let num = input
//     while(isNaN(num)){
//         console.log(`invalid number`)
//         input = prompt("Enter a number: ").toLowerCase();
//         num = input;
//     }
//     return num;
// }

// Uppercasing
// input = prompt("Phrase: ")

// console.log(uppercase(input))


// function uppercase(str){
//     let lower = "abcdefghijklmnopqrstuvwxyz"
//     let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     let x = "";
//     for (let char of str){
//         const index = lower.indexOf(char);
//         if (index !== -1){
//             x += upper[index];
//         }
//         else{
//             const index = upper.index
//         }
//     }
//     return x;
// }

// Invert case
// input = prompt("Phrase: ")
// console.log(invertstring(input))

// function invertstring(str){
//     let lower = "abcdefghijklmnopqrstuvwxyz"
//     let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     let x = "";
//     for (let char of str){
//         const index = lower.indexOf(char);
//         if (index !== -1){
//             x += upper[index];
//         }
//         else{
//             let index = upper.indexOf(char)
//             x += lower[index];
//         }
//     }
//     return x;
// }


