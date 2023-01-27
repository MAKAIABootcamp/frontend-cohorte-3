import { URL_PERSONAJES } from "../services/endpoints.js";
import getPersonajes from "../services/getPersonajes.js";
import postPersonajes from "../services/postPersonajes.js";

export const printCardsPersonaje = (container, personajesList) => {
  container.innerHTML = "";
  personajesList.forEach((person) => {
    container.innerHTML += `
        <article class="card">
            <figure class="card__image">
                <img src=${person.image} alt=${person.name}>
            </figure>
            <h3 class="card__name">${person.name}</h3>
        </article>
        `;
  });
};

export const renderCards = () => {
  const container = document.getElementById("container");

  document.addEventListener("DOMContentLoaded", async () => {
    const personajes = await getPersonajes(URL_PERSONAJES);
    printCardsPersonaje(container, personajes);
  });
};

export const actionSubmit = async(form) => {
  try {
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
        alert(
          `El campo ${key} no se encuentra diligenciado, por favor llénelo!`
        );
      }
    }
    if (noEmpty) {
      await postPersonajes(URL_PERSONAJES, newPersonaje);
    }
  } catch (error) {
    console.log(error);
  }
}

export const submitForm = (form) => {
  // const form = document.getElementById("form");
  form.addEventListener('submit', async() => {
    await actionSubmit(form);
  });
}


