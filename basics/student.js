// =========== getting the input from the student here =========== //
const profileAge = document.getElementById("student_age");
const save_details = document.getElementById("save_details");
// ========== adding an event listener here ========== //
save_details.addEventListener("submit", checkDetails);

function checkDetails() {
    // getting the current values from the form here =========== //
    const studentAge = profileAge.value;
    console.log(studentAge);
}
