// getting the controls from the page here ========//
const input = document.querySelector(`input[name="results_number"]`)
const btn = document.querySelector("button");
const results = document.querySelector("h1");
const secondNumber = document.querySelector(`input[name="second_number"]`);

// binding the event listener here ======
btn.addEventListener("click", ()=>{
    const firstNumber = input.value;
    const secondInput = secondNumber.value
});
