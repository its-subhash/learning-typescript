const object1 = {
    name:"Darsh",
    age:"44",
    username:"darshDCoding",
    "Email-id":"darsh@soemthin.com"
}
//properies can be accessed by dot or bracket notation.
console.log(object1.name)// dot notation
console.log(object1["name"])//Bracket notation
 // both line 7 and 8 gives same output, why are there 2 different types?? well...
 //bracket lets you pass properties name as a string so where dot method will fail for 4th Porperty of object1, bracket method will work.


// The actual object is stored in some other l
// ocation in memory and 'object1' is just reffering to that memory location.
const object2 = object1 // now this means that object1 and object2 both reffering to same location.

console.log(object2 == object1) // will return true since both are reffering to same memory location.

const object3 = {
    name:"Darsh",
    age:"44"
}

// now even though both object1 and object 3 are containig an object with exact same properties and values, both of there objects are stored at different location, and both are reffering to different location. 
console.log(object1 == object3) // will log false.
console.log(object1.name == object3.name) // will return true since value of both properties are same.

// const age = object1.age
const {age} = object1; // both line 19 and 20 means the same thing.
console.log(age)

const {name, username} = object1

// you can actully store funtions inside objects

const functionWalaObject ={
    RadheBol: function func(){
        console.log("Radhe...Radhe...")
    },
    anotherFunc (){
        console.log("something");
        
    }
}

functionWalaObject.RadheBol()
functionWalaObject.anotherFunc()




//Exercises...




