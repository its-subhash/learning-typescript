"use strict";
// const object1 = {
//     name:"Darsh",
//     age:"44",
//     username:"darshDCoding",
//     "Email-id":"darsh@soemthin.com"
// }
// //properies can be accessed by dot or bracket notation.
// console.log(object1.name)// dot notation
// console.log(object1["name"])//Bracket notation
//  // both line 7 and 8 gives same output, why are there 2 different types?? well...
//  //bracket lets you pass properties name as a string so where dot method will fail for 4th Porperty of object1, bracket method will work.
// // The actual object is stored in some other l
// // ocation in memory and 'object1' is just reffering to that memory location.
// const object2 = object1 // now this means that object1 and object2 both reffering to same location.
// console.log(object2 == object1) // will return true since both are reffering to same memory location.
// const object3 = {
//     name:"Darsh",
//     age:"44"
// }
// // now even though both object1 and object 3 are containig an object with exact same properties and values, both of there objects are stored at different location, and both are reffering to different location. 
// console.log(object1 == object3) // will log false.
// console.log(object1.name == object3.name) // will return true since value of both properties are same.
// // const age = object1.age
// const {age} = object1; // both line 19 and 20 means the same thing.
// console.log(age)
// const {name, username} = object1
// // you can actully store funtions inside objects
// const functionWalaObject ={
//     RadheBol: function func(){
//         console.log("Radhe...Radhe...")
//     },
//     anotherFunc (){
//         console.log("something");
//     }
// }
// functionWalaObject.RadheBol()
// functionWalaObject.anotherFunc()
// const product2 = {
//     name:'t-shirt',
//     ['dileviry-time']:'1 day',
//     rating: {
//         stars: 4.5,
//         count: 88
//     }
// }
// console.log(product2.rating.stars)
// //Exercises...
// // 8a. Let's say in the Amazone project, we have a basketball product. This product has a name of "baskeball", a price of 2095cents. Create an object to represent this product and display it in the console.
// const basketball= {
//     name: "BasketBall",
//     price: 2095
// }
// console.log(basketball.name)
// //8b. Continuing from 8a, let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.
// basketball.price = basketball.price + 500
// console.log(basketball.price)
// //8c. Using bracket notaion, add a property 'delivery-time' to the object with the value '3day'. Display the updated object in the console.
// basketball["delivery-time"]="3day"
// console.log(basketball)
// //8d. Create a fucntion 'comparePrice (product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.
// type proproduct ={
//     name:string,
//     price:number
// }
// const someRanodmIcecream:proproduct ={
//     name: "kuch toh hoga",
//     price:55
// }
// const anotherRandomIcecream:proproduct ={
//     name:"iska bhi kuch hoga...",
//     price:35
// }
// const anotherRandomIcecream2:proproduct ={
//     name:"iska bhi kuch hoga...",
//     price:35
// }
// const comparePrice= <p>(productt:p,producttt:p):p => productt.price >= producttt.price? productt : producttt
// console.log(comparePrice<proproduct>(someRanodmIcecream, anotherRandomIcecream))
// //8e. Create a fucntion 'isSameProduct(product1, product2)', which returns true if 2 products have the same values inside ('name'and 'price'). if not, return false. Create 2 products and try out the function.
// const isSameProduct= (product1:proproduct, product2:proproduct):boolean => {
//     if ((product1.price === product2.price) && (product1.name === product2.name)) {
//         return true
//     }
//     return false
// }
// console.log(isSameProduct(anotherRandomIcecream, anotherRandomIcecream2))
// console.log(isSameProduct(anotherRandomIcecream, someRanodmIcecream))
// //8f. Using Google or an A.I. tool, search how to convert a string to all lowercase with Javascript ("Good Morning"=> 'good morning')
// const makeLowerCase =(str:string):string=> str.toLocaleLowerCase()
// console.log(makeLowerCase("Good Morning"))
// //8g. Search how to repeat a string may times ('test' 2 times => 'testtest')
// const repetWord =(str:string, repeat:number):string => str.repeat(repeat)
// console.log(repetWord("Radhe...", 3))
// /*
// 8h. We'll add localStorage to the calculator project. First, make a copy of the project from exercise 7j (see the solution for 7j if needed).
// 1. Whenever we update the calculation, save it using .setitem()
// 2. When the page first loads, get the calculation using .getItem()
// 3. Use a default value of "if a calculation doesn't exist in local storage.
// */
// localStorage.setItem("something","nothing");
// const obj= document.getElementById("object-val")
// console.log(obj?.innerText)
// console.log(localStorage.getItem("something"))
// obj?.innerHTML =  `<p>${localStorage.getItem('something')}</p>`
// /*
// 8i. We'll improve the coin flip game form exercise 6j to be like the rock paper scissor game.
// > Copy the code form exercise 6j (see the solution for 6j if neended).
// > Create 2 buttons to play the game
// > When clicking 'heads' play the game with guess= "heads".
// > When clicking 'tails' play the game with guess = "tails".
// > Create a fucntion 'playGame(guess)' to resuse the code.
// */
// /*
// 8j. Create a score object {winds:0, losses:0}, update the score each time after playing, and display the score in the console.
// */
// /*
// 8k. Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string.)
// */
// /*
// For 8i to 8k we are using myobjectprac.html
// */
