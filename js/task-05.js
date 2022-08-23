const nameImputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameImputEl.addEventListener("input", (event) => {
    nameOutputEl.textContent = event.currentTarget.value;
  });
