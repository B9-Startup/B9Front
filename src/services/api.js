import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/b9Back/v1/api'
});

export default api;