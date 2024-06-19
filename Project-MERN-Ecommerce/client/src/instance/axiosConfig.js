import axios from 'axios';

const getToken = () => {
    let item = localStorage.getItem('token');
    if (item) {
        return item;
    } else {
        return '';
    }
};

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
    },
});

export default axiosInstance;
