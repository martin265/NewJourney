// ======== working on the search function here
const button = document.querySelector("button");
const message = document.querySelector("message");
const input = document.querySelector("input");

// ======== the array for the names will be here ==== //
const allNames = ["ronald", "maggie", "chifundo", "marting", "justine"];
// binding and event listener to the input field here ======= //
input.addEventListener("click", searchNames);

// ========= creating the function to search for the names here ======= //
function searchNames() {
    input.focus();
    // getting the value when the name is entered //
    const responseValue = input.value.toLowerCase();
    // looping through each item in the array to check if it matchets with the entered value ====== //
    for (let response = 0; response < allNames.length; response++) {
        // ======= checking if the value matches here ========= //
        if (responseValue === allNames[response]) {
            message.textContent = `the searched value is ${allNames[response]}`;
            break;
        }
        else {
            message.textContent = `the searched name is not available`;
        }
    }
}