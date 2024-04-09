function greetUser() {
    const message = "hello world";
    console.log(message.replace("hello", "martin"));
}

// calling or invoking the function here
// functions with default parameters
function profileName(name = "christ".toLocaleUpperCase()) {
    console.log(` hello ${name}`);
}


const input = document.querySelector("input");
const content = document.querySelector("h1");
const btn = document.querySelector("button");

input.addEventListener("keyup", function keyPress() {
    const choice = input.value;
    content.textContent = `you have pressed ${choice}`;
});

// adding the event listener to the button here =====//
btn.addEventListener("click", saveDetails);
const customerMessage = [];
function saveDetails() {
    customerMessage.push(content);
    console.log(`${customerMessage}`);
}





