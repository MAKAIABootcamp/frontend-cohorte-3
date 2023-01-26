const URL_API = "http://localhost:3000/products";

export const getProducts = async (functionCallback) => {
  try {
    const response = await axios.get(URL_API);
    // return response.data;
    functionCallback(response.data);
  } catch (error) {
    console.log(error);
    alert(error);
    return error;
  }
};

export const createProduct = async (data) => {
  try {
    const response = await axios.post(URL_API, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const urlDelete = `${URL_API}/${id}`;
    const response = await axios.delete(urlDelete);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id) => {
  try {
    const urlProducto = `${URL_API}/${id}`;
    const { data } = await axios.get(urlProducto);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const editProduct = async (id, product) => {
  try {
    const urlEdit = `${URL_API}/${id}`;
    const response = await axios.put(urlEdit, product);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
