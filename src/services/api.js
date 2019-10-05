import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/B9Back/v1/api'
});

export default api;