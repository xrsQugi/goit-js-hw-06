const counterValue = document.querySelector("#value");
let currentValue = 0;

document.querySelector('button[data-action="increment"]').addEventListener("click", () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
});

document.querySelector('button[data-action="decrement"]').addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});