const BASE_URL_API = process.env.REACT_APP_URL_API;

const endpoints = {
  news: `${BASE_URL_API}news`,
  authors: `${BASE_URL_API}authors`,
};

export default endpoints;