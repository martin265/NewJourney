// this section will center much on the manipulation of strings
const profileUsername = "usermartin123456789";
console.log(profileUsername.length);
// getting the last character of the string
console.log(profileUsername.length - 1);

// ======== getting the position of the string here ======== //
const profileEmail = "martisilungwe12@gmail.com";
// ========= checking if the email is valid ====== //
if (profileEmail.includes('@')) {
    console.log("valid email address");
}
else {
    console.log(`invalid email ${profileEmail}`);
}

// checking is a name starts with a capital letter nd ends with a full stop
function validateProfileNames() {
    try {
        // getting the inputs from the users
        const firstName = "marti";
        const lastName = "silungwe!";

        if (firstName.length < 5 && lastName.startsWith("123456789")) {
            console.log("enter a valid first name please");
        } 
        else if (lastName.length > 90 && lastName.endsWith("!")) {
            console.log("check your last name please");
        }
        else {
            console.log("valid firstname and lastname");
        }
    } catch (error) {
        console.log(`something went wromg at ${error}`);
    }
}


// changing case of a string 
const changingCase = "martin";
console.log(changingCase.toLocaleUpperCase());

let changeCase2 = "malawi";
const updated = changeCase2.replace("ma", "MA");

console.log(updated);



