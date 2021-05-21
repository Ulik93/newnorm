import axios from 'axios';

const instance = axios.create({
  baseURL: "https://norma-33eab-default-rtdb.firebaseio.com",
});
export default instance;
