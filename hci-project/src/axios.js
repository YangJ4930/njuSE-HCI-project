import axios from 'axios';

const instance = axios.create({
<<<<<<< HEAD
    // baseURL: 'http://127.0.0.1:8080',
    baseURL: 'http://127.0.0.1:7999',
=======
    baseURL: 'http://127.0.0.1:8080',
    // baseURL: 'http://127.0.0.1:4523/m1/3675702-0-default',
>>>>>>> 6783990bd1cdd47bb1353e8971c0247c0ca27f4f
    timeout: 5000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 可以添加认证信息、设置请求头等
        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    },
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 对响应数据做些什么
        return response;
    },
    (error) => {
        // 处理响应错误
        return Promise.reject(error);
    },
);

export default instance;
