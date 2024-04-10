const btn = document.querySelector("btn");

// function that return a random color
function randomColor(number) {
    return Math.floor(Math.random() * (number + 1));
}


// binding the event listener here
btn.addEventListener("click", ()=>{
    colorRGB = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    document.body.style.backgroundColor = colorRGB;
});