function addTow(num:number):number{
    return num + 2;
}

function getUpper(str:string){
    return str.toUpperCase();
}

function signUpUser(name:string, email:string, authenticated:boolean){
    console.log(name, email, authenticated);
}

let loginUser =(name:string, email:string, authenticated:boolean= false)=>{};

let myVal = addTow(2);
getUpper("hello");
signUpUser("Darsh","ajsd;",true);
loginUser("Darsh","ajsd;");

function getValue(myVal:number):boolean | string{
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

let getHello =(s:string):string=>{
    return ""
}


const heros =["Thor", "Iron Man", "Spider Man"]
// const heros =[1,2,3]

heros.map((hero):string=>{
    return `hey ${hero}`
});

function consoleError(errorMessage:string): void{
    console.log(errorMessage);
}

function handelError(errorMessage:string): never{
    throw new Error(errorMessage);
};


// some docs experiments

// unknown
let unknownVal=(s:unknown):void=>{
    // s.toUpperCase() // you can NOT do anything with unknown values   
}

let returnUnknown =(s:string):unknown=>{
    return ("Radhe Radhe")
}
let something = returnUnknown("hey")
// something.toUpperCase() //returns error cuz you can not do anything with unknown type.
console.log(something); //so we can log it, but cant perform any operations with it.

unknownVal("hey")

export{}