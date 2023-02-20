import axios from "axios";

const URL_API = "http://localhost:3000/asientos";

export const getSeats = async () => {
    try {
        const { data } = await axios.get(URL_API);
        return data;        
    } catch (error) {
        console.log(error);
        return []
    }
}