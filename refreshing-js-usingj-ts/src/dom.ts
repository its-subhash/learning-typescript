document.title = "Something new";

console.log(document);

// document.body.innerHTML = `<button>Click Me</button>`

// document.querySelector('button')
// ?.innerHTML= "Don't Click me";

// const buttonElement = document.querySelector('.js-btn')

// console.log(buttonElement)

const subButtonElement = document.querySelector(".js-sub-btn");

console.log(subButtonElement);

subButtonElement?.addEventListener("click", () => {
  if (subButtonElement != null) {
    if (subButtonElement.innerText == "Subscribe") {
      subButtonElement.innerText = "Subscribed";
    } else {
      subButtonElement.innerText = "Subscribe";
    }
  }
});

console.log(window.console.log("Darsh"));
// console.log(window.alert('jayhoo'))

//EXERCISEEEESSSSSSSSSS

// 9a. Create a <button>9a</button>, use document.querySelector('button') to get the button from the page, and then display it in the console. (not intrested)

//9b. Continuing from 9a, create another button <button>9b</button> below. Using JavaScript, change the text in the second button to '9b done!'

//9c. Create 2 buttons 'heads' and 'tails', and a paragraph (<p></p>)underneath. When clicking the 'heads' button, display 'You chose: heads' in the paragraph. When the 'tails' button, display 'You Chose: tails'.

//9d. Create a text box (<input>) and a submit button. When clicking "Submit", display "Your name is :${text}" on the page (${text}= the text inside the text box.)

//9e. Modify exercise 9d so that when you press 'Enter' in the <input>, it will also display the same message on the page.

//9f. continuing from 9e, create a function to reuse the code (if you already did this, skip this exercise).

const btnA = document.getElementById("9a");
const btnB = document.getElementById("9b");
const headsElement = document.getElementById("heads");
const tailsElement = document.getElementById("tails");
const flipMsgElement = document.getElementById("flip-msg");
const nameInputElement = document.getElementById('name-input')
const nameBtnElement = document.getElementById('name-input-btn')
const nameMsgElement = document.getElementById('name-msg')

btnA?.addEventListener("click", () => console.log("9a"));
btnB?.addEventListener("click", () => (btnB.innerText = "9b done!"));

const showMessage = (elment: HTMLElement, message: string) => {
  elment.innerText = message;
};

headsElement?.addEventListener("click", () =>
  showMessage(flipMsgElement, "You chose: heads!")
);

tailsElement?.addEventListener("click", () =>
  showMessage(flipMsgElement, "You chose: tails!")
);

nameBtnElement?.addEventListener('click', ()=>{
    showMessage(nameMsgElement, `Your name is: ${nameInputElement.value}`)
})

nameInputElement?.addEventListener('keydown', (event)=>{
    // if (event.key === "Enter"){
    //     showMessage(nameMsgElement, `Your name is: ${nameInputElement.value}`)
    // }

    mess(event, nameMsgElement,`Your name is: ${nameInputElement.value}` )
})

const mess =(eve,ele,msg )=>{
        if (eve.key === "Enter"){
        showMessage(ele, `${msg}`)
    }
}

//9a to 9f done.


 //9g. Create a file 9g.html and copy the code form ... In the amazone shipping calculator, enter a cost of 7.99 and click "calculate". What issue do you see? Fin a fix for this issue.

 //9g. done in exercise-dom.html

 /*
 9h. Let's create the project on the right:
 1. Whenever we type in the text box, update the text on the page.
 2. To do this, we'll learn another event called <input onkeyup="...">.
 3. This runs code after we press a key and release it (key comes up.)
 */
//9h. done in exercise-dom.html

 /*
 9i. We'll imporve the cart quantity project.
 1. Make a copy of exercise 7i.
 2. Create a paragraph to display the quantity.
 3. Whenever we update the quantity, display it on the page insted of in the console. Also, display the quantity when page first loads.
  */

 /*
 9j. We'll improve the calculator project.
 1. Make a copy of exercise 8h.
 2. Whenever we update the calculation, display it on the page insted of in the console.
 3. When the page first loads, if a calculation exists in localStorage, display it on the page.
 */


