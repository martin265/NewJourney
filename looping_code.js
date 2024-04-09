// the section for loops for (condition) another for loop
// using the for of loop with the arrays

const profileNames = ["martin", "ronald", "chifundo", "maggie", "justine"];


for (const name of profileNames) {
    console.log(name);
}

function chengeUpper(string) {
    return string.toUpperCase();
}

const pets = ["lion", "leopad"];

const new_array = pets.map(chengeUpper);

console.log(new_array);

// using the map function to multply the numbers
function multplyNumbers(number) {
    return number % 2;
}

const profileNumbers = [289, 8, 67, 3, 4, 29];

// pass the array to a new map function

const newArray = profileNumbers.map(multplyNumbers);
console.log(newArray);