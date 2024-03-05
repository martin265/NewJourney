// ========== working with the if statements in here
let childShopping = false;
let childAllowance;

if (childShopping == true) {
    childAllowance = 90;
    console.log(childAllowance);
}
else {
    childAllowance = 0;
    console.log(childAllowance);
}

// getting the value from the select box here//
const select = document.querySelector("select");
const message = document.querySelector("h1");

// ===== binding the event listener for the select fields ======= //
select.addEventListener("change", changeValue);

// ========= the function to change the value here ========= //
function changeValue() {
    // getting the selected value here ====== //
    const selectedValue = select.value;

    // ========= usng conditional statements here ========= //
    if (selectedValue === "Sunny") {
        message.textContent = "the curret weather is sunny";
    }
    else if(selectedValue === "Rain") {
        message.textContent = "the rains will start soon";
    }
    else {
        message.textContent === "";
    }
}

// ============= working with another form here

