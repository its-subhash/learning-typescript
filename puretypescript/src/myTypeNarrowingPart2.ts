function logValue(x:Date| string){
    if (x instanceof Date){ //instanceof can only be used if you are using new keyword in creating new type
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toUpperCase())
    }
}

type Fish ={ swim:()=>void }
type Bird ={ fly:()=>void }

function isFish (pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim != undefined
}

function isBird (pet:Fish | Bird): pet is Bird{
    return (pet as Bird).fly != undefined
}

function getFood (pet:Fish|Bird){
    if (isFish(pet)){
        pet
        return "Fish Food"
    }else{
        pet
        return "Bird Food"
    }
}


interface Circle {
    kind: "circle",
    radius:number,
}

interface Square {
    kind:"square"
    side:number
}

interface Rectangle {
    kind:"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square | Rectangle

function findShape (shape:Shape){
    if (shape.kind == "rectangle"){
        return shape //rectangle
    }
    else if (shape.kind == "square"){
        return shape //square
    }
    return Math.PI *shape.radius **2
}

function getArea (shape:Shape){
    switch (shape.kind){
        case "circle":
            return Math.PI *shape.radius **2;
        
        case "rectangle":
            return shape.length * shape.width;

        case "square":
            return shape.side **2;

        default :
        const _defalutcase:never = shape
        return _defalutcase
    }
}