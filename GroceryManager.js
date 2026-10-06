// Grocery Manager
const prompt = require('prompt-sync')();

var grociries = [];

for(a = 0; a != 5; a){
    a = select();
    if(a == 1){
        grociries = request();
    }
    else if(a == 2){
        remove();
    }
    else if(a == 3){
        print();
    }
    else if(a == 4){
        search();
    }
    else if(a == 5){
        console.log("Goodbye!")
    }
}

function search(){
    let x = 0;
     while(x != "Done"){
        let x = prompt("What grocreries are you looking for today? If you are finished type Done.").toLowerCase();
        let a = grociries.indexOf(x)
        if(x === "Done" || x === "done"){
            break
        }
        else if(a === -1){
            console.log("Not on the list");
        }
        else{
            console.log("Found")
        }
    }
}

function request(){
    let y = grociries;
    let x = 0;
    while(x != "Done"){
        let x = prompt("What grocreries are you looking for? If you are finished type Done. ").toLowerCase();
        let z = y.indexOf(x);
        if(x=== "Done" || x === "done"){
            break;
        }
        else if(z != -1){
            console.log("Already on the list.");
        }
        else{
            y.push(x);
            console.log("Item has been added.");
        }
    }
    return y;
}
function remove(){
    let x = 0
    while(x != "Done"){
        let x = prompt("What grocreries do you want to remove? If you are finished type Done. ").toLowerCase();
        let z = grociries.indexOf(x);
        if(x=== "Done" || x === "done"){
            break;
        }
        else if(z != -1){
            grociries.splice(z, 1);
            console.log("Item has been removed.");
        }
        else{
            console.log("Item is not on the list.");
        }
    }
}
function print(){
    for(var i = 0; i <= grociries.length - 1; i++){
        console.log(i + 1 + ". " + grociries[i]);
    }
}

function select(){
    for(a = 0; a == NaN || a > 5 || a <= 0; a){
        console.log("Please Select an Option - \n Press 1 to Add items \n Press 2 to Remove Items \n Press 3 to Print the List \n Press 4 to Search the List\n Press 5 to Quit");
        a = Number(prompt());
        if(a > 5 || Number.isNaN(a) || a <= 0){
            console.log("Invailed input. Please try again.")
        }
    }
    return a
}