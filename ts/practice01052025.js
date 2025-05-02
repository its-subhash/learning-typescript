"use strict";
// Custom Types
Object.defineProperty(exports, "__esModule", { value: true });
var anArray = [
    "Darsh", "DarshDCoding", 22, true, "lalalaaalala#001"
];
var anObject = {
    name: "Darsh",
    username: "DarshDCoding",
    age: 22,
    isAuthenticated: true,
    password: "lalalaaalalaa#001"
};
// Truly Constant.....
//variables whos neither value nor type can change...
var something = "Darsh"; // value can change but type cant
var somethngg; //"type is any, so anything can be done with it."
var somethinggg; // value and type both are fixed and should not be changed.
// other type of values...
var somethingggg; //string value is fixed but you can put any number value
var somethinggggg; // value can only be one of these...
// another way to do this is by using enum
var somevalues;
(function (somevalues) {
    somevalues[somevalues["Darsh"] = 0] = "Darsh";
    somevalues[somevalues["somehting"] = 1] = "somehting";
    somevalues[somevalues["fiftyfive"] = 2] = "fiftyfive";
})(somevalues || (somevalues = {}));
var yooyo = somevalues[2];
yooyo = somevalues[1];
console.log(typeof (somevalues.fiftyfive));
console.log(somevalues[2]);
// lets create some functions....
var Register = {};
var addToRegister = function (name, username, age, isAdult) {
    /// This function adds new user to a register but dont return anything.///
    Register[name] = {
        username: username,
        age: age,
        isAdult: isAdult
    };
};
addToRegister("Darsh", "DarshDCoding", 22, true);
console.log(Register);
