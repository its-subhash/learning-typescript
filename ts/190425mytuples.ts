const user: (string| number)[] = ['darsh', 25, 33] // we can put vlues in any order.

let tuser: [string, number, boolean, string] // now whatever array you'll put should match this sequence...making it a tuple.

tuser = ["darsh", 22, true, "this customer is freaking irritating"]

let rgb: [number, number, number, number?] // this array can only contain three values, all three should be number 
rgb = [255, 255, 255]
rgb = [255, 255, 255, 0.5] // since last number is optional

type User = [string, number, string?] // last one is for email

let newUser: User = ["darsh", 22]
let anotherUser:User = ["Subhash", 22, "subhashmishra4322@gmail.com"]



export {}
