import axios from "axios"

let point = "https://norma-76317-default-rtdb.firebaseio.com/"
const instance = axios.create({

  baseURL: "https://norma-76317-default-rtdb.firebaseio.com/",
})

export default instance
