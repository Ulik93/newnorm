import axios from "axios"

export const sendCallbackNumber = (phone_number) => {
  axios
    .post("http://185.29.184.52:3000/api/orders/phone/", { phone_number })
    .catch((error) => {
      console.log(error)
    })
}

export const sendEquipmentForm = (data) => {
  axios
    .post("https://dbbd0bbbe229.ngrok.io/api/orders/kkm/", {
      ...data,
    })
    .catch((error) => {
      console.log(error)
    })
}
