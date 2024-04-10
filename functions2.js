const para = document.querySelector("p");
const message = document.querySelector("h1")
let index = 0;

function showMessage() {
    // Clear any previous timeouts
    clearTimeout(timer);

    if (index < message.length) {
        para.textContent += message[index];
        index++;
        // Call showMessage again after a delay
        timer = setTimeout(showMessage, 100); // Adjust the delay as needed
    }
}

// Initial call to start typing the message
let timer = setTimeout(showMessage, 100); // Adjust the delay as needed
