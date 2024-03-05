// working with the switch statements here =========== //
const Select = document.querySelector("select");
const message = document.querySelector("p");

// adding the event listener here ======== //
Select.addEventListener("change", changeSelectedValue);

function changeSelectedValue() {
    // getting the value from the control
    const SelectedValues = Select.value;

    // using the switch statements here ======= //
    switch (SelectedValues) {
        case "Rain":
            message.textContent = `the current weather is ${SelectedValues}`;
            break;
        
        case "Sunny":
            message.textContent = `the current weather is ${SelectedValues}`;
            break;
        
        default:
            message.textContent = "this will run no matter what";
    }
}