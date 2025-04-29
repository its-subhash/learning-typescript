"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTow(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, authenticated) {
    console.log(name, email, authenticated);
}
var loginUser = function (name, email, authenticated) {
    if (authenticated === void 0) { authenticated = false; }
};
var myVal = addTow(2);
getUpper("hello");
signUpUser("Darsh", "ajsd;", true);
loginUser("Darsh", "ajsd;");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "Iron Man", "Spider Man"];
// const heros =[1,2,3]
heros.map(function (hero) {
    return "hey ".concat(hero);
});
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handelError(errorMessage) {
    throw new Error(errorMessage);
}
;
// some docs experiments
// unknown
var unknownVal = function (s) {
    // s.toUpperCase() // you can NOT do anything with unknown values   
};
var returnUnknown = function (s) {
    return ("Radhe Radhe");
};
var something = returnUnknown("hey");
// something.toUpperCase() //returns error cuz you can not do anything with unknown type.
console.log(something);
unknownVal("hey");
