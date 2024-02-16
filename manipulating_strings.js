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


