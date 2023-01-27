// import { actionSubmit, submitForm } from "../modules/ui.js";
import { URL_PERSONAJES } from "../services/endpoints.js";
import postPersonajes from "../services/postPersonajes.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formElements = Object.values(form);
  const newPersonaje = {};
  formElements.forEach((input) => {
    if (input.id) {
      newPersonaje[input.id] = input.value;
    }
  });
  let noEmpty = true;
  for (const key in newPersonaje) {
    const valueProperty = newPersonaje[key];
    if (!valueProperty) {
      noEmpty = false;
      alert(`El campo ${key} no se encuentra diligenciado, por favor llénelo!`);
    }
  }
  if (noEmpty) {
    await postPersonajes(URL_PERSONAJES, newPersonaje);
  }
});

// form.addEventListener('submit', async() => {
//    await actionSubmit(form);
// })