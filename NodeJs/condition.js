//if condition

console.log(`If condition.... `);

let age=20;
isLegalToDrink(age);
age=9;
isLegalToDrink(age);
age=70;
isLegalToDrink(age);

function isLegalToDrink(age) {
    if (age<18) {
        console.log(`No permission to drink.`);
    }
    else if(age>18 && age>60) {
        console.log(`Shouldn't drink.`);
    }
    else {
        console.log(`Can drink.`);
    }
}

console.log(`.............`);
console.log(`.............`);



//switch case condition

console.log(`Switch case condition.... `);

function analyseColour(colour) {
    switch (colour) {
        case "white":
            console.log(`White is pearl.`);
            break;
        case "green":
            console.log(`Green is peace.`);
            break;
        case "blue":
            console.log(`Blue is sky.`);
            break;
        default:
            console.log(`Unknown colour.`)
            break;
    }
}


let colour="white";
analyseColour(colour);
colour="yellow";
analyseColour(colour);
colour="green";
analyseColour(colour);



console.log(`.............`);
console.log(`.............`);



//ternary operator
//Exactly for two conditions, true or false.
//Condition ? true:false;

console.log(`Ternary operator.... `);


function isOver18(answer) {
    answer === "yes" ? console.log(`Yes, Over 18.`):console.log(`No, Under 18.`);
}

isOver18("yes");
isOver18("no");