// ====== passing values into a select control
const months = document.querySelector("select")
const monthsValue = document.querySelector("h1");

// ======= binding the event listener here
months.addEventListener("change", addMonths);

// function to loop through 
function createDays() {
    
}

function addMonths() {
    const selectedValue = months.value;
    
    // ========== checking the values here //
    if (selectedValue === "January") {
        monthsValue.textContent = "hello world"
    }
}