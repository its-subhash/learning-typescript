//arrays

const data: Array<number | string> = [1,2,3, "4"]
//orrrrrrr
const data2: (number | string)[] = [1,2,2,"five"]

let pi:3.142 = 3.142 // now pi can only be this exact number

// this can be used to give strict values to any variable

  // now seatAllotment can have ONLY one of these three values

seatAllotment ="Darsh" // won't work.

let d:"darsh" = "darsh" // so you can say what value it should be.

type User = {
    name:string,
    id:number
}
type Admin = {
    username:string, 
    id: number
}


let Rahul :User | Admin = {
    name:"Rahul",
    id:143
}
Rahul = {
    username: "rahul@123",
    id:142
}

console.log(Rahul)



function getDbId (id:number| string){
    // doing some API calls
    console.log(`Db id is ${id}`)
}

getDbId("Darsh")
getDbId (143)

function getIdAdvance(id:number|string){
    id.toUppercase() // this wont work because TS is treating id as a complete new data type that would end up in either num or stirng
    if (typeof id === "string") {
        id.toLocaleUpperCase() // now it will work.
    }
    else{
        id +=2 // done.
    }

}



// when you want to restrict values of variable...
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOUR
}

const hcseat= SeatChoice.FOUR

export {}