const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onBlur);

function onBlur(element){
const imput = element.currentTarget;
const imputLength = Number(imput.dataset.length);

  if(imput.value.length === imputLength) {
    imput.classList.remove('invalid');
    imput.classList.add('valid');
  }else {
    imput.classList.remove('valid');
    imput.classList.add('invalid');
  }
}