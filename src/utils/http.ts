import axios from "axios"

export default axios.create({
  baseURL: "https://63c652e7dcdc478e15bf1f66.mockapi.io/news",
  headers: {
    "contentType" : "application/json"
  }
})