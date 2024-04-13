// getting the input from the form here
const form = document.querySelector("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const age = document.getElementById("age");
const email = document.getElementById("email");


// getting the labels for the form here
const firstNameLabel = document.getElementById("firstnameLabel");
const lastNameLabel = document.getElementById("lastnameLabel");

const errorMessage = document.getElementById("error_message");
const errorMessage2 = document.getElementById("error_message2");
// binding the event listener here
form.addEventListener("submit", (e)=>{
    // checking if the fields are empty here
    if (firstName.value === "" || lastName.value === "") {
        e.preventDefault();
        // validations for the first name
        firstName.style.border = "solid 2px red";
        firstNameLabel.style.color = "red";
        errorMessage.textContent = "fill in the blanks please";
        errorMessage.style.color = "red"
        // ====== // ================= // ==========//
        lastName.style.border = "solid 2px red";
        lastNameLabel.style.color = "red";
        errorMessage2.textContent = "fill in the blanks please";
        errorMessage2.style.color = "red"
    }
});