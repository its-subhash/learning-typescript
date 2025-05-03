// Works just as type (as of my current understaing)
// you can define methods inside interface ig.


interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleAuth?:boolean,
    startTrial: ()=>string
}

const darsh:User = {
    dbId:22,
    email:"something@",
    userId:543,
    startTrial: ()=>{
        return "done"
    }
}


//another way of defining method inside interface.
interface Useri {
    readonly dbId:number,
    email:string,
    userId:number,
    googleAuth?:boolean,
    startTrial ():string
}

const some:Useri = {
    dbId:56434,
    email:"@.com",
    userId:6545,
    googleAuth:false,
    startTrial() { // array function can be used too... i am just doing it out of boardam
        return "hey heyyyy"
    }
}

interface freeCoupon {
    readonly dbId:number,
    username:string,
    couponcode (couponCode:string, totalFee:number, discount:number):string 
    //names of parameter do not have to match while creating the object.
    //these names are just for how should the structure look like. it's so called interface.
}

const couponForDarsh:freeCoupon={
    dbId:54,
    dbID:54,
    username:"DarshDCoding",
    couponcode(code:"Darsh20", fee:500, discont:20) { // see....we don't have to use parameter name same as what we created.
        const CouponCodeBase:string[]=["Darsh20", "DarshDCoding45"] //probably getting form some API call...
        if (code in CouponCodeBase){
            let discountedPrize =  fee - (fee * (discont/100))  
            return `discounted amount ${discountedPrize}`
        }
        return `Discount Can't be proceed, please check the code again.`
    },
}


// WOOOOOW SO YOU CAN ADD ANY NEW PROPERTY TO EXISTING INTERFACE BY JUST CALLING IT AGAIN AND JUST ADDING NEW PROPERTY IN IT.
// for example
interface freeCoupon {
    readonly dbID:number,
    username:string,
    googleAuth?:boolean
} // and done....all these properties got added to freeCoupon

const Raghav:freeCoupon={
    dbId:45,//shit i forgot that i am already taking id in it.
    dbID:45,
    username:"RaghavTheGenious",
    googleAuth:false,
    couponcode(coupon:"Raghav45", fee:500, disc:45){
        const CouponCodeBase:string[]=["Darsh20", "DarshDCoding45"]
        if (coupon in CouponCodeBase){
            let discountedPrize =  fee - (fee * (disc/100))  
            return `discounted amount ${discountedPrize}`
        }
        return `Discount Can't be proceed, please check the code again.`
    },
}


// And theres INHERITANCE IN INTERFACE.
//means we can extent any interface to create a new interface with some additional porperties.

interface merchantName extends freeCoupon { //can add even more interface seperated by coma.
    merchName:string
}

// now....how will merchantName interface look??
const DarshDMerchant:merchantName ={
    merchName:"Darshhhh",//bro I forgot to add this only...lol
    dbID:55,
    dbId:55,
    username:"MaiHuMerchant",
    googleAuth:false,
    couponcode :(code:"something", fee:45, disc:100) =>{
        return `Bhaad me ja.`
    },
    anotherFunc() {
        return 1
    },
}

interface merchantName { //btw this is known as "REOPENING THE INTERFACE."
    anotherFunc():number //now all mechant i creaed above will ask for this function too.
}

