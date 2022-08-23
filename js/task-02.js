const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul')
const newEl = [];

for(const ingredient of ingredients) {
  const addEl = document.createElement('li');
  addEl.textContent = ingredient;
  addEl.classList.add('item');
  newEl.push(addEl);
}

ulEl.append(...newEl);
console.log(ulEl)
