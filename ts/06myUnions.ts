let score = 33

let score2: string|number = 68

score2 = "hey"

type User ={
    readonly _id :number
    name:string
}

// type Admin ={
//     readonly id:number
//     username:string
// }

let Darsh: User
Darsh ={_id:55, name:"darshhh"}
Darsh ={_id:58, name:"darshhh"}
// Darsh = {_id:24,name:"ajkdjksdaklfjfas"}

function getDbId (id:number|string):{
    console.log(`DB id is: ${typeof(id)}`)
    return 1
}
getDbId(222)




