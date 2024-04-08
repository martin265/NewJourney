const select = document.querySelector("select");
const para = document.querySelector("h1");
const page = document.querySelector("body");
let temperature = 80;
// binding the event listener here ======//
select.addEventListener("change", calendar);


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

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// getting the container here 
const container = document.getElementById("month")

// function for the calendar will be here
function calendar() {
    // getting the value from the select input
    const choice = select.value;
    let content = "";
    if (choice === "january") {
        for (let days = 1; days <= 31; days++) {
            content += days + " ";
            container.textContent = content;
        }
    }

    // ============ getting the second choice here ============ //
    if (choice === "febuary") {
        for (let days = 1; days <= 28; days++) {
            content += days + " ";
            container.textContent = content;
        }
    }
}


const selectedItem = document.getElementById("month");
const name = document.querySelector("h1");
selectedItem.addEventListener("click", clickedItem);

function clickedItem() {
    // getting the content here =====//
    const item = content;
    name.textContent = `${item}`;
}

