// ====== passing values into a select control
const months = document.querySelector("select")
const monthsValue = document.querySelector("h1");

// ======= binding the event listener here
months.addEventListener("change", addMonths);

// function to loop through 
function createDays() {
    const days = [];
    for (let day = 1; day <= 31; day++) {
        days.push(day);
    }
    return days;
}

function addMonths() {
    const selectedValue = months.value;
    
    // ========== checking the values here //
    if (selectedValue === "January") {
        monthsValue.textContent = createDays();
    }
    else {
        monthsValue.textContent = "";
    }
}