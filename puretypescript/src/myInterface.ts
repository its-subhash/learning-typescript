interface TakePhoto {
    cameraMode:string,
    filter:string,
    burst:number
}

// class Instagram implements TakePhoto {
//     constructor (
//         public cameraMode:string,
//         public filter:string,
//         public burst: number
//     ){}
// }

interface Story {
    createStory ():string |number |void

};
// class Youtube implements TakePhoto, Story {
//     constructor (
//         public cameraMode:string,
//         public filter:string,
//         public burst: number,
//         public shorts:string // you can have more than what you defined in interface, but not less.
//     ){}

//     createStory(): string | number | void {
//         console.log("Story Created...");
//     }
// }

