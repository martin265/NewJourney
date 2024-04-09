// the section for loops for (condition) another for loop
// using the for of loop with the arrays

const profileNames = ["martin", "ronald", "chifundo", "maggie", "justine"];


for (const name of profileNames) {
   
}

function chengeUpper(string) {
    return string.toUpperCase();
}

const pets = ["lion", "leopad"];

const new_array = pets.map(chengeUpper);



// using the map function to multply the numbers
function multplyNumbers(number) {
    return number % 2;
}

const profileNumbers = [289, 8, 67, 3, 4, 29];

// pass the array to a new map function

const newArray = profileNumbers.map(multplyNumbers);


// using the filter function to get names that starts with m and l

function selectNames(string) {
    return string.startsWith("m");
}

const allNames = ["Martin", "chifundo", "Maggie", "justine"];


const newNames = allNames.filter(selectNames);



// working with the multplication tables here ======== //
const results = document.querySelector("#result");
const reset = document.querySelector("#reset");
const calculate = document.querySelector("#calculate");


// binding the event listener here ========== //
