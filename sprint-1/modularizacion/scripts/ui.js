import { createProduct, deleteProduct } from "./services.js";

const tBodyProducts = document.getElementById("tBodyProducts");

export const renderTable = (data) => {
  tBodyProducts.innerHTML = "";
  data.forEach((element) => {
    tBodyProducts.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>$ ${parseInt(element.price).toLocaleString()}</td>
                <td><button>✍</button><button class="button__delete" name=${
                  element.id
                }>❌</button></td>
            </tr>
        `;
  });
};

export const submitForm = async (form) => {
  const elementForm = Object.values(form);
  const newProduct = {};
  let validate = true;
  elementForm.forEach((element) => {
    if (element.id && element.value) {
      console.log(element.value);
      newProduct[element.id] = element.value;
    }
    if (element.id && !element.value) {
      alert(`El campo ${element.id} no está diligenciado`);
      validate = false;
      return;
    }
  });
  if (validate) {
    console.log(newProduct);
    await createProduct(newProduct);
  }
};

export const actions = () => {
  tBodyProducts.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("button__delete")) {
      const confirmDelete = confirm(
        "¿Está usted seguro de eliminar este producto?"
      );
      if (confirmDelete) {
        await deleteProduct(target.name);
        alert("Eliminado exitosamente");
      }
    }
  });
};
