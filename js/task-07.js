const fondSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fondSizeControlEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value +'px';
  });

 