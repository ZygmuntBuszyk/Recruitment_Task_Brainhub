import Axios from 'axios';

const api = Axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: "*/*",
		'Content-Type': 'application/json'
	}
});

export default api;