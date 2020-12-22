import Axios from 'axios';

export const axiosInstance = Axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});