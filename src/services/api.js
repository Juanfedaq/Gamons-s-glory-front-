import axios from "axios";
import VueCookies from "vue-cookies";
import router from "@/router"; // Certifique-se de que o caminho para o roteador está correto

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

api.interceptors.request.use((config) => {
  const token = VueCookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push({ name: "login" }); // Certifique-se de que o nome da rota de login está correto
    }
    return Promise.reject(error);
  }
);

export default api;
