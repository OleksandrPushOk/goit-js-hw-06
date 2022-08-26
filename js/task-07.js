
const fondSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fondSizeControlEl.value}px`;

fondSizeControlEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value +'px';
  });




