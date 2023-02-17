import axios from "axios";
import endpoints from "./endpoints";

export const getAuthor = async (id) => {
    try {
        const { data } = await axios.get(`${endpoints.authors}/${id}`)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}

export const getAuthorLogin = async (user, password) => {
    try {
        const { data } = await axios.get(`${endpoints.authors}?user=${user}&password=${password}`)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}