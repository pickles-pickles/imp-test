import axios from 'axios'

const BASE_URL = 'http://jsonplaceholder.typicode.com/users'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// GET user info
const getUsers = () => axiosInstance.get(`${BASE_URL}`)

export { getUsers }
