"use strict";
function logValue(x) {
    if (x instanceof Date) { //instanceof can only be used if you are using new keyword in creating new type
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim != undefined;
}
function isBird(pet) {
    return pet.fly != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function findShape(shape) {
    if (shape.kind == "rectangle") {
        return shape; //rectangle
    }
    else if (shape.kind == "square") {
        return shape; //square
    }
    return Math.PI * shape.radius ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.side ** 2;
        default:
            const _defalutcase = shape;
            return _defalutcase;
    }
}
