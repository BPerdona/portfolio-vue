import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:8080/api/v1",
});

api.interceptors.request.use(
    (config) => {
      config.headers.set('Access-Control-Allow-Origin', '*')
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
   );

export default api