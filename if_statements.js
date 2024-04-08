const select = document.querySelector("select");
const para = document.querySelector("h1");
const page = document.querySelector("body");
let temperature = 80;
// binding the event listener here ======//
select.addEventListener("change", selectChange);


function selectChange() {
    const value = select.value;

    if (value === "sunny" && temperature == 90) {
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