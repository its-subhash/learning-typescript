"use strict";
console.log("Radhe Radhe...");
let a = 45;
// class User {
//     email:string;
//     public name:string;
//     private city: string = " " // you can access it inside class only. everything else which isn't marked as privet is always public.
//     constructor(email:string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        //access modifier.... public,protected and privet.
        this.city = " "; // can be accessed outside of class too...
        this._courseCount = 1; // can be accessed only and only within class, even child class cannot access it.
        this.familymember = ""; // can be accessed within classes only, it can be accessed in child class too.
        //if you don't mention privet or public, the you have to define the parameter, like city in this example is defined before use. 
        this.email = email;
        this.name = name;
    }
    // Now we will start for 07-05-25
    //lets get getters and setters (important for interview)
    get getAppleEmail() {
        return `${this.name} is an Apple user.`;
    }
    get getCourseCount() {
        //enter some logic here...
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1.");
        }
        this._courseCount = courseNumber;
    }
    //lets have a privet method.
    deleteToken() {
        console.log("Token Deleted...");
    }
}
const darsh = new User("darsh@com", "Darsh");
console.log(darsh.email); // since it's privet, we can not use it.
console.log(darsh.name); // can be accessed because it's public.
console.log(darsh.getCourseCount);
//Inheritance.....
class SubUser extends User {
    constructor() {
        super(...arguments);
        // child class can not use private properties of parent class...
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount; // we cannot use it, since it's a privet propertie of parents class
        this.familymember; //can be use because its a protected property.
    }
}
