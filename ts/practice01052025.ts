// Custom Types

type myOwnArray = [string, string, number, boolean, string]

type myOwnObject = {
    name:string,
    username:string,
    age:number,
    isAuthenticated:boolean,
    password:string
}

let anArray:myOwnArray = [
    "Darsh", "DarshDCoding", 22, true, "lalalaaalala#001"
]

let anObject:myOwnObject ={
    name:"Darsh",
    username:"DarshDCoding",
    age:22,
    isAuthenticated:true,
    password: "lalalaaalalaa#001"
}

// Truly Constant.....

//variables whos neither value nor type can change...
let something:string = "Darsh"// value can change but type cant

let somethngg //"type is any, so anything can be done with it."

let somethinggg:"Darsh...." // value and type both are fixed and should not be changed.


// other type of values...

let somethingggg: 'Heyoooooo' | number //string value is fixed but you can put any number value


let somethinggggg:"heyyooo"| "lalalaaalala" | 404 | "kya hai??" // value can only be one of these...
// another way to do this is by using enum
enum somevalues {
    "Darsh",
    "somehting",
    "fiftyfive",
}
let yooyo = somevalues[2]
yooyo = somevalues[1]
console.log(typeof (somevalues.fiftyfive))
console.log(somevalues[2])

// lets create some functions....
const Register = {}
const addToRegister = (name:string, username:string, age:number, isAdult?:boolean):never => {
    /// This function adds new user to a register but dont return anything.///
    Register[name]= {
        username: username,
        age: age,
        isAdult:isAdult
    }
}

addToRegister("Darsh", "DarshDCoding", 22, true)

console.log(Register)

export{}
