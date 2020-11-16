import axios from "axios";

const Api = axios.create({
  baseURL: `https://api-14bis.herokuapp.com`,
});

export default Api;
