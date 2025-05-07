//making an abstract class means you can not create any object of that class.... but can only use it as a parent for other classes.
//you can define functions inside abstract class, that can have logic inside, unlike interface where you can only define method.

abstract class TakePhoto {
    constructor (
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSome():string

    getSomething ():number {
        //some logic inside
        return 0
    }
}

// const Darsh = new TakePhoto("Front", "b/w") //will give error.

class Insta extends TakePhoto {
    constructor (
        public cameraMode:string,
        public filter:string,
        public burst:number //this is additional, while cameraMode and filter has to be added for it to work
    ){
        super(cameraMode,filter) //super methd to access all the properties of parent class.
    }
    // getSomething(): number { //this method is optional if you want to use it in your child class or not.
    //     return 55
    // }
    getSome(): string { //this method is nessessary to add, because it's an abstract method
        console.log("getting something")
        return "45"
    }
}

