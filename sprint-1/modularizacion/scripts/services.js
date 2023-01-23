const URL_API = 'http://localhost:3000/products'

export const getProducts = async (functionCallback) => {
    try {
        const response = await axios.get(URL_API);
        // return response.data;
        functionCallback(response.data);
    } catch (error) {
        return error;
    }
}

export const createProduct = async (data) => {
    try {
        const response = await axios.post(URL_API, data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async(id) => {
    try {
        const urlDelete =`${URL_API}/${id}`
        const response = await axios.delete(urlDelete);
        return response.data
        
    } catch (error) {
        return error
    }
}