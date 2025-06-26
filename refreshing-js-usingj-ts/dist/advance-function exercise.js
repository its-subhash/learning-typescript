// 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); run the function twice.

const add = function () {
  console.log(2 + 3);
};
add();
add();

//12b. continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parameter) and returns it twiced.
function runTwice(fun) {
  fun();
  fun();
}
runTwice(add);

//12c. Create the button below. When clicking the button, after 1 seconds, the text inside the button changes to "Finished!"

let tewlveC = document.getElementById("start");

tewlveC.addEventListener("click", () => {
  setTimeout(() => {
    tewlveC.innerHTML = "Finished!";
  }, 1000);
});

//12d. Continuing from ex.12c, modify the button so that when we click it, the text immediately changes to "Loading...", and then after 1 second, it changes to "Finished!"

let tewlveCOne = document.getElementById("start1");

tewlveCOne.addEventListener("click", () => {
  tewlveCOne.innerHTML = "Loading...";
  setTimeout(() => {
    tewlveCOne.innerHTML = "Finished!";
  }, 1000);
});

const addCartEle = document.getElementById("addToCart");
const cartMessEle = document.getElementById("cartMess");

addCartEle.addEventListener("click", () => {
  cartMessEle.innerText = "Added";
  setTimeout(() => {
    cartMessEle.innerText = "";
  }, 2000);
});

const addCartEle2 = document.getElementById("addToCart2");
const cartMessEle2 = document.getElementById("cartMess2");

let timerId;

addCartEle2.addEventListener("click", () => {
  cartMessEle2.innerText = "Added";
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    cartMessEle2.innerText = "";
  }, 2000);
});

// 12g. Imagine we're creating a messaging app. Use setInterval() and doucmnet.title to create the feature on the rightt(the title changes every 1 second)

let messCount = 0;
setInterval(() => {
  if (messCount <= 0) {     //solution of 12i
    document.title = "App";
    messCount = 0;
    return;
  }
  document.title = `(${messCount}) New messages`; // solution for current question
  // messCount++
}, 1000);

//12h. Continuining from 12g, insted of displaying "(2) New messages" everytime, save the number of messages in a variable: let messages=2;
// a. Use the number in the variable to determine what title to display.
// b. Create 2 buttons "Add"/ "Remove" that increase/ decrease the "messages" variable by 1.

const addMessEle = document.getElementById("addMess");
const removeMessEle = document.getElementById("removeMess");

addMessEle.addEventListener("click", () => {
  messCount++;
});
removeMessEle.addEventListener("click", () => {
  messCount--;
});

// 12i. Continuing from 12h:
//a. Don't let "message" go below 0.
//b. if messages === 0 stop changing ther title and display "app" as the title.
//c. When messages > 0 start changing the title again.

// for this exercise am add solution to previous exercise.
