import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.137.47:3333'
});

export default api;