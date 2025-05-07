const score:Array<number>=[]
score.push(22)
score.push(25)
score.push(2)

const names:Array<string>=[]
names.push("Darsh")


function identityOne (val:boolean | number):boolean|number {
    return val
    //logic behind this function looks like you are returning boolean for boolean parameter or number for number, but what if i return number ?? or vice versa?
}

function identityTwo(val:any):any{
    return val
    // Iski to baat hi chordo...
}

function identityThree <Type> (val:Type):Type{
    return val
    // now here......type gets locked, if you are passing number in <Type>, it automatically considers the type of parameter and returning value as number ONLY.
}

let typeOfThisValue = identityThree<string>("50")
console.log(typeof typeOfThisValue) // output: string

//another way is to put argument first, the returning type will automatically be decided depending on type of argument value.
let AnotherTypeOfThisValue = identityThree(true)
console.log(typeof AnotherTypeOfThisValue) // output: boolean

//shortcut of writing generic...

function identityFour <T> (val:T):T{ // you can use placeholder for Type. just keep in mind that all three should be same.
    return val
}

interface bottle {
    brand:string,
    type:number
}

let heyo = identityFour<bottle>({brand:"kk", type:45});

console.log(typeof heyo, heyo) //output: object


function getSearchProucts<T>(arg:T[]):T{
    const myIndex=3
    return arg[myIndex]
}

const aboveFuncitonAsArrowFunction =<T> (arg:T[]):T => {
    const myIndex =3
    return arg[myIndex]
}

