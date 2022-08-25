const navIdEl = document.querySelector('#categories');
console.log(`Number of categories: ${navIdEl.children.length}`);

const navEl = document.querySelectorAll('.item');
navEl.forEach(category => {
       console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
  });
