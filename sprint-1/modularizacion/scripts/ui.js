import { createProduct, deleteProduct, editProduct, getProduct, getProducts } from "./services.js";

let isEdit = null;
const tBodyProducts = document.getElementById("tBodyProducts");
const form = document.getElementById("form");
let elementForm = Object.values(form);
console.log(elementForm);

export const actionsForm = () => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await submitForm(isEdit);
  });
}

export const renderTable = (data) => {
  tBodyProducts.innerHTML = "";
  data.forEach((element) => {
    tBodyProducts.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>$ ${parseInt(element.price).toLocaleString()}</td>
                <td><button class="button__edit" name=${
                  element.id
                }>✍</button><button class="button__delete" name=${
      element.id
    }>❌</button></td>
            </tr>
        `;
  });
};

export const submitForm = async (isEdit) => {
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
  if (validate && !isEdit) {
    console.log(newProduct);
    await createProduct(newProduct);
  }
  if (validate && isEdit) {
    await editProduct(isEdit, newProduct);
    isEdit = null;
  }
  // reset(elementForm);
  form.reset();
  await getProducts(renderTable);
};

export const actions = () => {
  tBodyProducts.addEventListener("click", async ({ target }) => {


    //----Eliminar un producto
    if (target.classList.contains("button__delete")) {
      const confirmDelete = confirm(
        "¿Está usted seguro de eliminar este producto?"
      );
      if (confirmDelete) {
        await deleteProduct(target.name);
        alert("Eliminado exitosamente");
        await getProducts(renderTable);
      }
    }
    //---Editar un producto
    if (target.classList.contains("button__edit")) {
      console.log(target.name);
      elementForm[elementForm.length - 1].innerText = 'Editar Producto';
      //console.log(isEdit);
      // debugger
      isEdit = target.name;
      const product = await getProduct(target.name);
      console.log(product);
      elementForm.forEach(input => {
        if (input.id) {
          input.value = product[input.id];
        }
      })
    }
  });
};

const reset = (elementForm) => {
  elementForm.forEach((input) => {
    if (input.id) {
      input.value = "";
    }
  });
};
