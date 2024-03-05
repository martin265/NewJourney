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

// ========= creating a times table here
function createTimesTable() {
    // looping through some numbers here
    for (let singleNumber = 1; singleNumber <= 12; singleNumber++) {
        let results = singleNumber * 2;
        console.log(`${singleNumber} * 2 = ${results}`);
    }

}

// calling the function here
createTimesTable();
