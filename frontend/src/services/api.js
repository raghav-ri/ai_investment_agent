import axios from "axios";

const api = axios.create({
    baseURL: VITE_BACKEND_URL,
});

export default api;