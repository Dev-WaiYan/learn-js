// data types
var v;
v = undefined; // undefined
printType(v);

v = null; // object
printType(v);

v = 2; // number
printType(v);

v = 3.4; // number
printType(v);

v = "3"; // string
printType(v);

v = false; // boolean
printType(v);

v = [1,'2']; // array // object
printType(v);

v = {name : "data types"}; // object
printType(v);

v = function() { console.log("hello") ;} // function
printType(v);



// print type
function printType(value) {
    console.log(`when ${value} is assigned => `, typeof value);
}
