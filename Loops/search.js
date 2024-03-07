// ======== working on the search function here

const availableCats = ["jack", "ryan", "angie", "grace"];
// ========= looping through the array using the while loop
const messageProfile = "my favorite cats are ";

let counter = 0;
while (counter < availableCats.length) {
    console.log(`${messageProfile} ${availableCats[counter]}`);
    counter++;
}