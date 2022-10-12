"use strict";
// 1.
// -----------------------------------------------------------------------
// selectors
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
let total = 0;

console.dir(totalParagraph);
colaButton.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
});
peanutButton.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolateButton.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});
gummiesButton.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});

// 2.
// -----------------------------------------------------------------------
// selectors
const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // grab data from user input, check in console
  const howManyInput = document.querySelector("#howMany").value; // now a string
  const typeOfCoinInput = document.querySelector("#type").value; // now a string
  console.dir(howManyInput);
  console.dir(typeOfCoinInput);

  for (let i = 0; i < howManyInput; i++) {
    // make elements
    const newCoin = document.createElement("div");
    // modify elements
    newCoin.classList.add(typeOfCoinInput, "coin");
    newCoin.textContent = typeOfCoinInput;
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    // append to the page
    coinContainer.append(newCoin);
  }
});

// 3.
// -----------------------------------------------------------------------
// selectors
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb");
const lightButtons = document.querySelectorAll(".light-switch");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("light");
  // alternatively, this works without using CSS
  // lightBulb.style.backgroundColor = "yellow";
  // lightBulb.style.color = "black"
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("light");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
  // onButton.setAttribute("disabled", true);
  // offButton.setAttribute("disabled", true);
  // toggleButton.setAttribute("disabled", true);
  // endButton.setAttribute("disabled", true);

  // the more concise way uses a shared class
  lightBulb.remove();
  lightButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  });
});
