import axios from "axios";

const postPersonajes = async(url, newPersonaje) => {
    try {
        const { data } = await axios.post(url, newPersonaje);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default postPersonajes;