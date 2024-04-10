// getting the values using the dom manipulation
const para = document.querySelector("p");




function chooseName() {
    const names = ["martin", "ronald", "chifundo"];
    for (let name of names){
        const content = name;
        para.textContent = `${name}`;
    }
    
}

// function to draw a canvas on the screen
