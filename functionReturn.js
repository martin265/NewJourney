const btn = document.querySelector("button");

// function that return a random color
function randomColor(number) {
    return Math.floor(Math.random() * (number + 1));
}


// binding the event listener here
btn.addEventListener("mouseover", ()=>{
    colorRGB = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    document.body.style.backgroundColor = colorRGB;
});
