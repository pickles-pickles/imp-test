import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// GET user info
const getUser = (username: string) =>
  axiosInstance.get(`${BASE_URL}${username}`)

// GET user repos
const getUserRepos = (username: string) =>
  axiosInstance.get(`${BASE_URL}${username}/repos`)

// GET user followers
const getUserFollowers = (username: string) =>
  axiosInstance.get(`${BASE_URL}${username}/followers`)
// Export all functions
export { getUser, getUserRepos, getUserFollowers }
