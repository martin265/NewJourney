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
    // getting the value when the name is entered //
    const responseValue = input.value.toLowerCase();
    // looping through each item in the array to check if it matchets with the entered value ====== //
}