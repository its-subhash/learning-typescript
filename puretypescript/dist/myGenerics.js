"use strict";
const score = [];
score.push(22);
score.push(25);
score.push(2);
const names = [];
names.push("Darsh");
function identityOne(val) {
    return val;
    //logic behind this function looks like you are returning boolean for boolean parameter or number for number, but what if i return number ?? or vice versa?
}
function identityTwo(val) {
    return val;
    // Iski to baat hi chordo...
}
function identityThree(val) {
    return val;
    // now here......type gets locked, if you are passing number in <Type>, it automatically considers the type of parameter and returning value as number ONLY.
}
let typeOfThisValue = identityThree("50");
console.log(typeof typeOfThisValue); // output: string
//another way is to put argument first, the returning type will automatically be decided depending on type of argument value.
let AnotherTypeOfThisValue = identityThree(true);
console.log(typeof AnotherTypeOfThisValue); // output: boolean
//shortcut of writing generic...
function identityFour(val) {
    return val;
}
let heyo = identityFour({ brand: "kk", type: 45 });
console.log(typeof heyo, heyo); //output: object
function getSearchProucts(arg) {
    const myIndex = 3;
    return arg[myIndex];
}
const aboveFuncitonAsArrowFunction = (arg) => {
    const myIndex = 3;
    return arg[myIndex];
};
