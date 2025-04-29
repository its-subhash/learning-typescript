const User ={
    name:"Darsh",
    email:"darsh@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean }){}

createUser({name:"Darsh", isPaid:false})

function createCourse():{name:string, price:number}{
    return {name:"Darsh", price:25}
}

// After 5 days of procastinating (spelling might be wrong) am back to learning typescript

type User ={
    readonly _id:string,
    name:string,
    email:string,
    active:boolean,
    creditcardDetails?: number
}

let myuser:User ={
    _id: "4553",
    name : "Darsh",
    email: "mishradarshh@gmail.com",
    active: true,
}

myuser.name= "Subhash"
// myuser._id= "1234" // this will give error because _id is readonly and we can not change it.

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate // adding two existing types to create a new third type
let card:cardDetails = {
    cardnumber:"3244 1345 3246 1354",
    cardDate: "20/02/2002"
}


export {}
