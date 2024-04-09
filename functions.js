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

input.addEventListener("keyup", function keyPress() {
    const choice = input.value;
    content.textContent = `you have pressed ${choice}`;
});



