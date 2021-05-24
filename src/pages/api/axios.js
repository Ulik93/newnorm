import axios from "axios"

let point = "https://norma-33eab-default-rtdb.firebaseio.com/"
const instance = axios.create({
  baseURL: "https://norma-33eab-default-rtdb.firebaseio.com/",
})

export default instance
