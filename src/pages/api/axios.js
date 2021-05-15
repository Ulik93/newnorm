import axios from 'axios';

let point = "https://norma-76317-default-rtdb.firebaseio.com/"
const instance = axios.create({
  baseURL: "https://b35129c5ad6e.ngrok.io",
});
export default instance;
