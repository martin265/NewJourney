function greetUser() {
    const message = "hello world";
    console.log(message.replace("hello", "martin"));
}

// calling or invoking the function here
// functions with default parameters
function profileName(name = "christ".toLocaleUpperCase()) {
    console.log(` hello ${name}`);
}


// getting and setting values on the page here
const body = document.body;
const panel = document.createElement("div");
panel.setAttribute("class", "msg");


// appending the div to the body here =========== //
body.appendChild(panel);


// ============= appending a message content to the panel here ========= //
const message = document.createElement("p");
message.textContent = "this is the alert dialog page";
panel.appendChild(message);


// adding a button to the panel for closing the alert dialog
const btn = document.createElement("button");
btn.textContent = "close window";
panel.appendChild(btn);


// ========= adding an event listener to the button here ========= //
btn.addEventListener("click", function() {
    panel.parentNode.removeChild(panel);
});






