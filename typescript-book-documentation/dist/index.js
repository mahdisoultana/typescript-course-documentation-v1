"use strict";
function sayName(greating = '') {
    const name = "mahdi";
    console.log(`${greating} my Name is ${name}`);
}
// sayName(34)
sayName('Hi');
// there is 5 syntaxes to write functions and typescript support that also
//named function , i heared someone say function declaration
function great(pram) {
    console.log(pram);
}
//function experssion
const sayGreat = function () {
    console.log('greating');
};
const greating = (pram) => {
    console.log(pram);
};
//short hand arrow function
const shortGreating = pram => console.log(pram);
//Function Constructor
const greater = new Function('name', 'return "Greater" + name');
