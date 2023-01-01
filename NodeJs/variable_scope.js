// global scope
let personFullName = "John Doe";

// function declaration
// 1. keyword => function
// 2. naming convention => verb
// 3. return type => void / return
function showNumber(){
    // function scope
    // using function scope variable
    let num = 1;
    console.log("number is => ", num);
}

function showName() {
    // using global scope variable
    console.log("name is => ", personFullName);
}



function doLoop() {
    // "let, const" can use for local scope / block scope.
    var i = 0; 
    for(let i = 0; i < 5; i++) {
        console.log("i is => ", i);
    }

    console.log("After loop is done, i is => ", i);
}

doLoop();