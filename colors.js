const select = document.querySelector("select");
const content = document.querySelector("h1");
const fullBody = document.querySelector("body");

// binding the event listener here ======== //
select.addEventListener("change", getChoice);


function getChoice() {
    const choice = select.value;

    switch(choice) {
        case "red":
            content.style.color = "white";
            fullBody.style.backgroundColor = "grey"
            break;


    }
    
}