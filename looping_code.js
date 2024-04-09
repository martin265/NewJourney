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



// // working with the multplication tables here ======== //
// const results = document.querySelector("#results");
// const reset = document.querySelector("#reset");
// const calculate = document.querySelector("#calculate");


// binding the event listener here ========== //
function calculateResults() {
    // looping through the code here
    for (let i = 1; i <= 12; i++) {
        const sum = `${i} X ${i} = ${i * i}`;
        const results = sum;
        console.log(results);
    }

}

// looping through an array of items here 
const search = document.querySelector("#searchInput");
const results = document.querySelector("$results");
const btn = document.querySelector("#searchButton");


// binding an event listerner to the input here
btn = document.addEventListener("click", loopingThrough);

function loopingThrough() {
    const allNames = ["martin", "maggie", "chifundo"];
    const enteredValue = search.value.toLowerCase();

    for (const singleName of allNames) {
        if (singleName.startsWith("m") === enteredValue) {
            console.log(singleName);
            break;
        }
    }   
}
