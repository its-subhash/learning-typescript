"use strict";
//7a. Create a function called 'greet' that displays the message "Hello!" in the console. Call/ run this fucntion a few times using greet();
//solution:
// const greet =():void=>{
//     console.log("Hello!")
// }
//7b. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'hello ${name}!' call the function a few times with different names: greet('simon');
//solution:
// const greet =(name:string):void=>{
//     console.log(`Hello ${name}`)
// }
//7c. Try calling greet() without a name (it will display "hello undefined!"), modify the function so that if 'name' is undefined, it will display 'Hi there!' insted.
//solution:
const greet = (name) => {
    console.log(!name ? 'Hi there!' : `Hello ${name}!`);
};
greet();
greet("Darsh");
//7d. create a function 'convertToFahrenheit(celsius)' that takes a number in degrees celsius and returns a number in degrees fahrenheit. formula = (celsius *9/5)+32 eg. convertToCelsius(86) => 30
//solution:
const convertToFahrenheit = (celsius) => {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
};
//7e. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees fahrenheit and returns a number in degrees celsius. formula = celsius = (fahrenheit-32)*5/9 eg. convertToCelsius(86) => 30
//solution:
const convertToCelsius = (fahrenheit) => {
    let celsius;
    celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};
//7f. create a function 'convertTempreture(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit. return string.
const convertTempreture = (degree, unit) => {
    unit = unit.toLocaleUpperCase();
    if (unit === "F") {
        return convertToFahrenheit(degree);
    }
    else if (unit === "C") {
        return convertToCelsius(degree);
    }
    return 0;
};
//7g. create a function convertLength (length, from, to ) that takes a number and a unit ('km' or 'miles') and conveerts the length to another unit ('km' or 'miles'). 1mile = 1.6km (approx)
//eg.
// convertLength (50, 'miles', 'km') => '80 km'
const convertLength = (length, from, to) => {
    from = from.toUpperCase();
    to = to.toUpperCase();
    if (from === "KM" && to === "MILES") {
        let mile = 1.6 * length;
        return `${mile} mile`;
    }
    else if (from === "MILES" && to === "KM") {
        let km = (1 / 1.6) * length;
        return `${km} km`;
    }
    return "Something went wrong, plese check arguments";
};
console.log(convertLength(1, 'km', 'miles'));
console.log(convertLength(1.6, 'miles', 'km'));
//7h. Update convertLength to support converting between km, miles, and also feet. Note 1 miles = 5280ft, 1km = 3281ft(approx)
const convertLengthUpdate = (length, from, to) => {
    from = from.toUpperCase();
    to = to.toUpperCase();
    if (from === "KM" && to === "MILES") {
        return convertLength(length, "km", "miles");
    }
    else if (from === "MILES" && to === "KM") {
        return convertLength(length, "miles", "km");
    }
    else if (from === "FEET" && to === "KM") {
        return `${(1 / 3281) * length} km`;
    }
    else if (from === "FEET" && to === "MILES") {
        return `${(1 / 5280) * length} miles`;
    }
    else if (from === "KM" && to === "FEET") {
        return `${3281 * length} feet`;
    }
    else if (from === "MILES" && to === "FEET") {
        return `${5280 * length} feet`;
    }
    return 'Invalid Arguments';
};
console.log(convertLengthUpdate(1, 'km', 'miles'));
console.log(convertLengthUpdate(1.6, 'miles', 'km'));
console.log(convertLengthUpdate(1, 'miles', 'feet'));
console.log(convertLengthUpdate(1, 'km', 'feet'));
console.log(convertLengthUpdate(3281, 'feet', 'km'));
console.log(convertLengthUpdate(5280, 'feet', 'miles'));
//7i. Update convertLength so that if you five it an ivalid unit, it will return 'invalid unit: ${unit}'.
//eg. convertLength(5, 'lbs', 'lbs') => 'invalid unit: lbs
const convertLengthUpdate2 = (length, from, to) => {
    from = from.toUpperCase();
    to = to.toUpperCase();
    const units = { "KM": 1, "MILES": 2, "FEET": 3 };
    if ((from in units) && (to in units)) {
        return convertLengthUpdate(length, from, to);
    }
    return from in units ? `Invalid unit ${to}` : `Invalid unit ${from}`;
};
console.log(convertLengthUpdate2(1, 'biggha', "lbs"));
console.log(convertLengthUpdate2(1, 'km', 'miles'));
console.log(convertLengthUpdate2(1.6, 'miles', 'km'));
console.log(convertLengthUpdate2(1, 'miles', 'feet'));
console.log(convertLengthUpdate2(1, 'km', 'feet'));
console.log(convertLengthUpdate2(3281, 'feet', 'km'));
console.log(convertLengthUpdate2(5280, 'feet', 'miles'));
console.log(convertLengthUpdate2(1, 'lbs', 'lbs'));
console.log(convertLengthUpdate2(1, 'km', 'lbs'));
console.log(convertLengthUpdate2(1, 'biggha', 'miles'));
//7j. Create a copy of the Calculator project form exercise 5r, create a new function 'updateCalculation' and reuse the repeted code.
// i never did it, not planning to do it either.
//7k. Create a copy of the Cart Quantity project form exercise 6i, create a function 'updateCartQuantity' and reuse the code.
//7l. Modify 'updateCartQuantity' so that if the quantity is invalid, alert(); and then return;(this is called an early return). An early return make out code cleaner becasuse we can removethe 'else if'/ else.
