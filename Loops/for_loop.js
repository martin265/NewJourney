// looping through an array of items here
const profileNames = ["ronald", "maggie", "chifundo", "wongani"];

for (const profileName of profileNames){
    console.log(profileName);
}

// ======== changing the case of items in the array here ========== //
function toUpper(string) {
    return string.toUpperCase();
}

const newProfileNames = profileNames.map(toUpper);

// fuction to multipy array numbers by two
const availableNumbers = [1, 2, 3, 4, 5, 6];

function multipyNumbers() {
    const profileNumber = Number(2);
    for (const selectedNumber of availableNumbers){
        return selectedNumber * profileNumber;
    }
}

// using the map function to create a new array of numbers
const newProfileNumbers = availableNumbers.map(multipyNumbers);


function lCats(cat) {
    return cat.startsWith("L");
}

const cats = ["Leopard", "Lion", "Martin", "Ninja"];

const newCats = cats.filter(lCats);

// there are two types of for loops, one is the for as loop and the second one is the for loop
/* 
for (initializer as array) {
    some code to run if the loop condition is true
}

for (initializer, condition, final-expression) {
    some code to run
}
*/


// calling the function here
// there are two type of for loops the first one hae the following syntax
// for (variable of values)
const profilePeople = ["ronald", "maggie", "chifundo", "martin", "wongani"];
for (const profile of profilePeople) {
    console.log(profile);
}
console.log("\n");
// ======== the same example can also be worked out like this
for (let i = 0; i < profilePeople.length; i++) {
    console.log(profilePeople[i]);
}