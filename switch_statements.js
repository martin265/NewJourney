// ======== switch statements helps to avoid cumbersome if statements
const profileGender = "none";

switch(profileGender) {
    case "male":
        console.log(`the current gender ${profileGender}`);
        break;
    case "female":
        console.log(`the current gender is ${profileGender}`);
        break;
        default:
            console.log("all the cases did not match the required result");
}

// ========== a working example using the switch conditions
let select = document.querySelector("select");
let outputText = document.querySelector("h1");

// ========== adding an event listener to the drop down option here ========== //
select.addEventListener("change", checkWheather);
// ========== function to check the wether here ============ //
function checkWheather() {
    // getting the value from the drop down here =========== //
    const selectedValue = select.value;

    // using the switch statements here ============ //
    switch(selectedValue){
        case "hot":
            outputText.textContent = `you have select the ${selectedValue}`;
            break;
        
        case "humid":
            outputText.textContent = `you have selected the ${selectedValue}`;
    }
}