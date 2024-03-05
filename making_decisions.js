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
const tempreature = 70;

// ===== binding the event listener for the select fields ======= //
select.addEventListener("change", changeValues);

// ========= the function to change the value here ========= //
function changeValue() {
    // getting the selected value here ====== //
    const selectedValue = select.value;

    // ========= usng conditional statements here ========= //
    if (selectedValue === "Sunny") {
        if (tempreature >= 90) {
            message.textContent = `the current tempreature is ${tempreature} ane the weather is ${selectedValue}`
        }
    }
    else if(selectedValue === "Rain") {
        if (tempreature < 80) {
            message.textContent = `the weather is ${selectedValue} and the current tempreature is ${tempreature}`;
        }
    }
    else {
        message.textContent === "";
    }
}

// ============= working with another form here
// using logical operators here
function changeValues() {
    // getting the value from the select input
    const selectedValue = select.value;

    // ========== checking using the if statement here ========== //
    if (selectedValue === "Sunny" && tempreature <= 70) {
        message.textContent = `the current tempreature is ${tempreature} and the weather is ${selectedValue}`;
    }
    else if (selectedValue === "Rainy" && tempreature >= 90) {
        message.textContent = `the current tempreature is ${tempreature} and the weather is ${selectedValue}`;
    }
}
