// getting the controls from the page here ========//
const input = document.querySelector(`input[name="results_number"]`)
const btn = document.querySelector("button");
const results = document.querySelector("h1");
const secondNumber = document.querySelector(`input[name="second_number"]`);

// binding the event listener here ======
btn.addEventListener("click", ()=>{
    const firstNumber = Number(input.value);
    const secondInput = Number(secondNumber.value);
    // checking if the values provide are numbers
    const sumCalc = firstNumber + secondInput;
    if (sumCalc) {
        results.textContent = `${sumCalc}`;
    }
});
