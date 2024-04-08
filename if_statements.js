const select = document.querySelector("select");
const para = document.querySelector("h1");
const page = document.querySelector("body");
let temperature = 80;
// binding the event listener here ======//
select.addEventListener("change", checkStatus);


function selectChange() {
    const value = select.value;

    if (value === "sunny" || temperature == 90) {
        para.textContent = "hello world"
    }
    else if (value === "snow") {
        page.style.backgroundColor = "white";
    }
    else if (value == "cloudy") {
        page.style.backgroundColor = "yellow"
        page.style.transitionDuration = 2000
    }

}

// using switch statements from the same example
function checkStatus() {
    // getting the value to evaluate using the switch statements here ====== //
    const choice = select.value;
    switch (choice) {
        case "sunny":
            page.textContent = "the selected value is sunny";
            break;
        
        case "cloudy":
            page.textContent = "the selected value is cloudy";
            break;
        
        default:
            page.textContent = "nothing to see here";
    }
}

