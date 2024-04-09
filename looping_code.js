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

// 