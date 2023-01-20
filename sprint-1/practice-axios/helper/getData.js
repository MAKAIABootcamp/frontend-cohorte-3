export const getData = async (url) => {
  try {
    const { data, status } = await axios.get(url);
    //   console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const getData2 = (url) => {
//     axios.get(url).then(({ data }) => {
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })
// }

//---Fetch: Es una función nativa de JavaScript que nos permite realizar peticiones HTTPs. Este método recibe dos parámetros: fetch(url,option) donde la url: recurso o la url de la API que vamos a consultar y option: es un objeto donde el especificamos el método HTTP que vamos a estar ejecutando (GET, POST, DELETE, PUT, PATCH), dependiendo el método le pasamos el dato que queremos enviar o reemplazar. Esta option es un parámetro opcional
// Cuando no le pasamos una option al Fetch el va a ejecutar un método GET. 

// const getData3 = async(url) => {
//     try {
//         const response = await fetch(url);
//         const resp = await response.json();
//         return resp;
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getData4 = () => {
//     fetch(url).then((response) => {
//         response.json().then((resp) => {
//             console.log(resp)
//         })
//      }).catch((error) => {
//         console.log(error)
//     })
// }