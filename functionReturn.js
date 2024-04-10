const btn = document.querySelector("button");

// function that return a random color
function randomColor(number) {
    return Math.floor(Math.random() * (number + 1));
}


// binding the event listener here
btn.addEventListener("", ()=>{
    colorRGB = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    document.body.style.backgroundColor = colorRGB;
});

btn.addEventListener("click", ()=>{
    const pageWidth = document.body.clientWidth;
    if (pageWidth < 640 || pageWidth === 640) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
});

function hideContainer() {
    const div = document.querySelector("containerHide");
    if (div.style.display = "show") {
        div.style.backgroundColor = "yellow";
    }
}
