//6a. Create a variable called 'hour' and save the current hout of the day (use 24-hours format and save it as a number between 0 and 23). 
// 1. If hour is between 6 and 12, display "Good Morning!" in the console.
// 2. If hour is between 13 and 17, display 'Good Afternoon!' in the console.
// 3. Otherwise, display 'Good night!' in the console.
let date = new Date();
let hour = date.getHours()

if (hour>=6 && hour <= 12){
    console.log("Good Morning!")
    
} else if (hour>=13 && hour<=17 ){
    console.log("Good Afternoon!")
} else {
    console.log("Good Night")
}
//solution for 6a done.



//6b. Continuing from 6a, try changing the value in the 'hour' variable to make it display different messages.
//not intrested in solving 6b.

//6c. Continuing form 6a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: "Good morning ${name}!"
let namee = "Darsh";

if (hour>=6 && hour <= 12){
    console.log(`Good Morning${namee}!`)
} else if (hour>=13 && hour<=17 ){
    console.log(`Good Afternoon ${namee}!`)
} else {
    console.log(`Good Night ${namee}!`)
}

//6d. Imagine an amusement park that has a discount for children (6 years and younger) or senior (65 years and older).
//1. Create a variable 'age' and save a person's age inside.
//2. Create an if-statement that checks if the person qualifies for a discount. if they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
// try using || operator in the solution.
//3. Try changing the 'age' variable to display different messages. // not intrested
const age = 5;
console.log(age<=6 || age>=65 ? "Discount":"No Discount")

//6e. Continuing from 6d, let's say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;
// Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
//&& has a higher priority than || s you may need to use brackets() to control which code gets done first.
// Try changing the value of isHoliday to display different messages.
const isHoliday = true;

console.log((age<=6 || age>=65) && isHoliday ? "Discount": "No Discount")


//6f. Generate a random number with Math.random(). Save it in a variable.
const randNum = Math.random();

//6g. Create an if-statement and check:
//1. if the number is less than 0.5, then display 'heads' in the console.
//2. Else display 'tails' in the console.
console.log(randNum<0.5? 'heads':'tails')

//6h. Insted of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.
const result = randNum<0.5? 'heads':'tails'

//6i. Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess ('heads' or 'tails').
// If your guess matches the result, display 'You win!' in the console and 'You lose!' if it dosen't match.
const guess= 'heads'
console.log(result === guess? "You Win!": "You lose!")

//6j. (challenge) Insted of using if-statements in the previous exercise, try switching them into ternary operators (condition ? A:B).
// did it in first place.

//6k. Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10:
//1. If it will, display a popup saying 'The Cart is full' and don't update the quantity.
//2. Otherwise, update the quantity and console.log() it as usual.

let cartQuantity = 10;
//just to make cartQuantity random... let's do...
cartQuantity = Math.round(Math.random()*10)
if (cartQuantity == 10){
    alert ("The Cart is full")
}else{
    console.log(`Cart Quantity before: ${cartQuantity}`)
    cartQuantity ++
    console.log(`Cart Quantity after: ${cartQuantity}`)
}


//6l. In exercise 5i-5k, we created the 'Remove from cart', '-2', and '-3' buttons. Before updating the quantity, check if it will go below 0:
// if it will, create a popup saying 'Not enough items in the cart' and don't update the quantity. Otherwise, update the quantity and console.log() it as usual.
let button= -2 // for componsating the button
if (cartQuantity >=0){
    let finalQuantity = cartQuantity + button
    if (finalQuantity <0){
        console.log(`Not enough items in the cart. Current item number: ${cartQuantity}`)
    } else if (finalQuantity >0){
        const previousCount = cartQuantity
        cartQuantity = finalQuantity
        console.log(`cart got updated. Previous count: ${previousCount}, Current count: ${cartQuantity}`)
    }
}