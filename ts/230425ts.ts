type User = {
    _id: number,
    name:string,
    email:string,
    isActive:boolean
}



const createUser = (user:User) =>{}


let myUser:User ={
    _id:1234,
    name:"Darsh",
    email: "darsh@gmail.com",
    isActive: true
}

console.log(myUser._id)

type cardDate = {cardDate:number}
type cardNumber = { cardNumber: number};
type cardCVV = {cardCVV: number}

// merginig different data types in a new data type


type cardDetails = cardNumber & cardDate & cardCVV

const cardddd: cardDetails = {
    cardNumber: 321324654613,
    cardDate: 250525,
    cardCVV: 258
}



// Array...
let newArr: string[]=[] // for array of string values
let newArr2: number[]=[] // for array of numbers
let newArr4 :Array<number> =[]
let doubleArray : [][]=[]

let newArr3:cardDetails[]=[] //for array of custom data type

newArr3.push({cardNumber:12445465, cardCVV:32145, cardDate:617454})
console.log(newArr3)
newArr2.push(45)
newArr4.push(2222)






export {}