import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'R7Sr9KqUa5eBGbS2IMTSNZNdP74rFmAHzig-sh08_r4',
    },
})


instance.interceptors.request.use(
    (config) => {
        console.log('Запрос отправлен:', config);
        return config;
    },
    (error) => {
        console.error('Ошибка запроса:', error);
        return Promise.reject(error);
    }
);

 instance.interceptors.response.use(
    (response) => {
        console.log('Ответ получен:', response);
        return response.data;
    },
    (error) => {
        console.error('Ошибка ответа:', error.response || error);
        return Promise.reject(error);
    }
);

export default instance;
