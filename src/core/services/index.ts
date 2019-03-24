import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(
  config => config,
  error => {
    console.log(error),
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default service