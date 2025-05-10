function detectType (val:number|string){
    if (typeof val == "string"){
        return val.toUpperCase()
    }
    return val + 1
};

const someFunc = (para:string|number|string[]):string =>{
    if (typeof para == "string"){
        para.toUpperCase()
        return "string"
    }
    else if (typeof para == "number"){
        para + 3
        return "number"
    }
    para[0]
    return "object"
}

function provideId (id:string|null){
    if (!id){
        console.log("Provide id")
    }
    //somecode...
    id?.toLowerCase()
}

function printAll(strs:string|string[]|null){
    if (strs){
        if (typeof strs == "object"){
            for (const s of strs){
                console.log(s);
            }
        }
        else if (typeof strs === "string"){
            console.log(strs);
        }
    }
    else if (strs === ""){
        console.log("Freaking empty string")
    }
    console.log("Put some value you ducking idiot")
    return 0
};

interface Users {
    name:string,
    email:string
};

interface Admin {
    name:string,
    email: string,
    isAdmin:boolean
};

// in operator can be used to narrowing interfaces
function isAdminAccount(account: User| Admin){
    if ("isAdmin" in account){
        console.log(account.isAdmin)
        return account.isAdmin
    }
    console.log(account.name)
}

