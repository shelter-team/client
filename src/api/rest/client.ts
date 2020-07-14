import axios from 'axios'

const instance = axios.create({
  timeout: 100000,
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
	maxContentLength: 10000,
})

//instance.interceptors.request.use()
//instance.interceptors.response.use()

export default instance