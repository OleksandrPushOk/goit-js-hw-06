const navIdEl = document.querySelector('#categories')
const numberOfCategoriesEl = navIdEl.children
console.log(`Number of categories: ${numberOfCategoriesEl.length}`)

const navEl = document.querySelectorAll('.item')
for(let i = 0; i < navEl.length; i += 1) {
    const categoryEl = navEl[i].children;
    // console.log(categoryEl);
    const categoryElTitle = categoryEl[0].textContent;
    // console.log(categoryElTitle);
    const categoryElElement = categoryEl[1].querySelectorAll('li').length;
    // console.log(categoryElElement);
     
    console.log(`Category: ${categoryElTitle}` );
    console.log(`Elements: ${categoryElElement}`);
}


