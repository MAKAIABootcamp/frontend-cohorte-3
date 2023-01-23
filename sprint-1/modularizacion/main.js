import { getProducts } from "./scripts/services.js";
import { renderTable } from "./scripts/ui.js";
import { submitForm } from "./scripts/ui.js";
import { actions } from "./scripts/ui.js";

//Capturar el formulario
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", async () => {
  // const products = await getProducts();
  // renderTable(products);
  await getProducts(renderTable);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(form);
  console.log(typeof form);
//   const elementForm = Object.values(form);
//   // const inputs = [];
//   // elementForm.forEach((element) => {
//   //   if (element.id) {
//   //     inputs.push(element);
//   //   }
//   // });
//   const newProduct = {};
//   let validate = false;
//   elementForm.forEach((element) => {
//     if (element.id && element.value) {
//       console.log(element.value);
//       newProduct[element.id] = element.value;
//       validate = true;
//     }
//     if (element.id && !element.value) {
//       alert(`El campo ${element.id} no está diligenciado`);
//       validate = false;
//       return;
//     }
//   });
//   if (validate) {
//       console.log(newProduct);
//       await createProduct(newProduct);
//   }
    await submitForm(form);
    return false;
});

actions();
