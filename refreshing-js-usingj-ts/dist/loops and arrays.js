// // let randNum = 0;

// // while (randNum<0.3){
// //     randNum= Math.random();
// // }
// // console.log(randNum)


// // const todoList = [
// //     "do something",
// //     "do something again",
// //     "do something again and again"
// // ];

// // for (let i =0; i < todoList.length; i ++){
// //     console.log(todoList[i])
// // }

// let arrNums= [1,2,4,5,5,8];
// let sum =0; //accumulator

// for(let i =0; i<arrNums.length; i++){
//     console.log(arrNums[i]);
//     sum += arrNums[i]
// }
// console.log(sum)

// //crate a function that returns an array of each element of input array with double the value.

// const doubleVal=(arr)=>{
//     let doubleArr=[]; //accumulator
//     for (let i = 0; i<arr.length; i++){
//         doubleArr.push(arr[i]*2)
//     }
//     return doubleArr
// }
// console.log(doubleVal(arrNums))

console.log("Radhe Radhe....")

const todoInput = document.getElementById('todoInput');
const todoAddBtn = document.getElementById('todoAddBtn')
const jstodoList = document.getElementById('js-todo-list')

const todoList= []

const addtoPage=()=>{
    let todoListHtml=''
    for(let i=0; i<todoList.length; i++){
        const html = `<p>${todoList[i]}</p>`
        todoListHtml += html;
    }
    jstodoList.innerHTML= todoListHtml
    console.log(todoListHtml)
}
addtoPage()


todoAddBtn.addEventListener('click', ()=>{
    if(todoInput.value.length>0){
        todoList.push(todoInput.value)
        todoInput.value=''
        console.log(todoList)
    }
    addtoPage()
    
})
todoInput.addEventListener('keyup', (event)=>{
    if (event.key == "Enter"){
        todoList.push(todoInput.value)
        todoInput.value=''
        console.log(todoList)
    }
    addtoPage()
})


