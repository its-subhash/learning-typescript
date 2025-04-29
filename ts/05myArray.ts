const superHeros:string[] = []
superHeros.push ("Shaktimaan")

const numbers:number[] = []
numbers.push(10)

const booleans:Array<boolean>= []

const superHerosAndNumbers: Array <string | number> =[]

superHerosAndNumbers.push(55)
superHerosAndNumbers.push ("Something")

type User ={
    name:string,
    isActive:boolean
}

const uselessUser:User[]=[]
uselessUser.push({name:"Darsh", isActive:true})


const theNormalOne:[name:string, age:number] =["darsh",22]
console.log(theNormalOne[1])


const MLModels: number[][]= [ // [][] means array of array
    [255, 555, 555],
    [343, 555, 555],
    [456, 646, 677]
]






// practice
let arr:Array<string>= []

arr.push("Darsh")
arr.push(55) // will give type error 


let arr2:number[] = []
arr2.push("Jay ho") // will giv3e type error
arr2.push (56.44)

let userDetails:[name:string, age:number, phoneNumber?:number]
userDetails= ["Darsh",55]
userDetails = ["Darsh", 55, 2378648]


let userDetails2:[name:string, age:number, phoneNumber:number]
userDetails2 = ["Darsh", 22] //is giving error
userDetails2= ["Darsh",22, 222] //no error

export {}