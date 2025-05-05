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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = " "; // you can access it inside class only. everything else which isn't marked as privet is always public.
        this.email = email;
        this.name = name;
    }
}
const darsh = new User("darsh@com", "Darsh");
console.log(darsh.email);
