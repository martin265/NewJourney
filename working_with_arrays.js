//  this section of the document will be dealing with working with arrays

const shoppingItems = ["mangoes", "apples", "oranges", "pieches"];
console.log(shoppingItems);
// finidng the lenght of an array, using the length property
console.log(shoppingItems.length);
// working with the index of the array and the multdimensional arrays
let shoppingItemsArray = ["potatoes", "apples", "oranges", [1, 3, 5, 6]]; // this is a multidimensional array
console.log(shoppingItemsArray[3].length - 1);
// using the index of to return the exact index of that item in the array,
const birds = ["parrot", "falcon", "owl"];
console.log(birds.indexOf("egle"));
// when the index of method does not find the specified item in the array it returns -1 or if it does it will return the index of that item

let profileNames = ["ronald", "maggie", "chifundo", "wongani"];
profileNames[0] = "justine";
console.log(profileNames);


// ============= adding and removing items in an array using the push, unshift, and pop methods ========= //
let newItems = ["mangoes", "apples"];

let newList = profileNames.push(newItems);
console.log(profileNames[4][0]);

// removing an item from the end of the list
console.log(profileNames.unshift("quavas"));
console.log(profileNames);
// =========== removing an item at the first line of the list
console.log(profileNames.shift());

console.log(profileNames);
// ========== removing an item at the end of the list
console.log(profileNames.pop());

console.log(profileNames);

// ========= looping through all the items in the array ============= //
for (const profile of profileNames) {
    console.log(profile);
}

// ========= working with map function here ============ //
const allNumbers = [893, 3949, "martin", "silungwe", "brenda", "maggie"];

const newListPage = map(allNumbers);
console.log(newListPage);
