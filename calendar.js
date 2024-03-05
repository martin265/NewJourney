// ========== getting values from the html page here
const Select = document.querySelector("select");
const message = document.querySelector("h1");

// binding the event listener here 
Select.addEventListener("change", selectCalendar);

// ========== function to show a calendar ============= //
function selectCalendar() {
    const selectedMonth = Select.value;
    // ======= checking the selected month here ========== //
    if (selectedMonth === "January") {
        // building the calendar here ======== //
    }
}