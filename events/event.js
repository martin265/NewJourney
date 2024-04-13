// getting the input from the form here
const form = document.querySelector("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const age = document.getElementById("age");
const email = document.getElementById("email");


// getting the labels for the form here
const firstNameLabel = document.getElementById("firstnameLabel");
const errorMessage = document.getElementById("error_message");

// binding the event listener here
form.addEventListener("submit", (e)=>{
    // checking if the fields are empty here
    if (firstName.value === "" || lastName.value === "") {
        e.preventDefault();
        firstName.style.border = "solid 2px red";
        firstNameLabel.style.color = "red";
        errorMessage.textContent = "fill in the blanks please";
        errorMessage.style.color = "red"
    }
});