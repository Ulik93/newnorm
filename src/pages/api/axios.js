import axios from "axios"

let point = "https://54eef70ccd1a.ngrok.io/api/equipments/equipments/"
const instance = axios.create({
  baseURL: "https://54eef70ccd1a.ngrok.io/api/equipments/equipments",
})

export default instance;


// import axios from "axios"

// let point = "https://norma-33eab-default-rtdb.firebaseio.com/"
// const instance = axios.create({
//   baseURL: "https://norma-33eab-default-rtdb.firebaseio.com/",
// })

// export default instance;