// ========== getting values from the html page here
const Select = document.querySelector("select");
const message = document.querySelector("h1");
const calendarControl = document.getElementsByClassName("calendar");

// binding the event listener here 
Select.addEventListener("change", selectCalendar);

// ========== function to show a calendar ============= //
function selectCalendar() {
    const selectedMonth = Select.value;
    // ======= checking the selected month here ========== //
    if (selectedMonth === "january") {
        // building the calendar here ======== //
        for (const single_control = 0; single_control <= 10;) {
            message.textContent = `hello world`;
            single_control++;
        }
    }
}