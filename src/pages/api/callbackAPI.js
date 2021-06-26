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
    .post("http://185.29.184.52:3000/api/orders/kkm/", {
      ...data,
    })
    .catch((error) => {
      console.log(error)
    })
}

export const sendNewNews = (data) => {
  axios
    .post("http://185.29.184.52:3000/api/news/images/", data)
    .catch((error) => {
      console.log(error)
    })
}

export const getNewNews = () => {
  axios
    .get("http://185.29.184.52:3000/api/news/")
    .then((response) => {
      console.log(response.data[5].images)
      debugger
    })
    .catch((error) => {
      console.log(error)
    })
}
