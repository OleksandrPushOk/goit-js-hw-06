const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;


decrementEl.addEventListener("click", onDecrement);
incrementEl.addEventListener("click", onIncrement);

function onDecrement()  {
counterValue -= 1;
console.log(counterValue)
valueEl.textContent = counterValue;
}

function onIncrement()  {
counterValue += 1;
console.log(counterValue)
valueEl.textContent = counterValue;
}


