"use strict";
//making an abstract class means you can not create any object of that class.... but can only use it as a parent for other classes.
//you can define functions inside abstract class, that can have logic inside, unlike interface where you can only define method.
class TakePhoto {
    constructor(cameraMode, filter, pvc) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.pvc = pvc;
    }
    getSomething() {
        //some logic inside
        return 0;
    }
}
// const Darsh = new TakePhoto("Front", "b/w") //will give error.
class Insta extends TakePhoto {
    constructor(cameraMode, filter, pvc, burst //this is additional, while cameraMode and filter has to be added for it to work
    ) {
        super(cameraMode, filter, pvc); //super methd to access all the properties of parent class.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.pvc = pvc;
        this.burst = burst;
    }
    // getSomething(): number { //this method is optional if you want to use it in your child class or not.
    //     return 55
    // }
    getSome() {
        console.log("getting something");
        return "45";
    }
}
