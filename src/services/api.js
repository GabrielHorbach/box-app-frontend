import axios from 'axios';

const api = axios.create({
    baseURL: 'https://box-app-backend.herokuapp.com/'
});

export default api;