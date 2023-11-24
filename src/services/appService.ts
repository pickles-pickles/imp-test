import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// GET all news
const getUser = (username: string) =>
  axiosInstance.get(`${BASE_URL}${username}`)

// Export all functions
export { getUser }
