import { getProducts } from "./scripts/services.js";
import { actionsForm, renderTable } from "./scripts/ui.js";
import { actions } from "./scripts/ui.js";



document.addEventListener("DOMContentLoaded", async () => {
  await getProducts(renderTable);
  actionsForm();
  actions();
});


