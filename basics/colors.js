// ========= file will change the color of the text and the background 
const selectedItem = document.querySelector("select");
const html = document.querySelector("body");
// ========= attaching an event listener to the drop down menu
selectedItem.addEventListener("change", changeColor);
// ========= the function to change the color here ======== 

function changeColor() {
    // getting the selected value here
    const choice = selectedItem.value;

    if (choice === "Black") {
        html.style.backgroundColor = "black";
        html.style.textColor = "white";
    }
    else if (choice == "White") {
        html.style.backgroundColor = "white";
        html.style.textColor = "black";
    }
}