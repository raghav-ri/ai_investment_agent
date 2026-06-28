import axios from "axios";

const api = axios.create({
    baseURL: "https://ai-investment-agent-v56e.onrender.com/api"
});

export default api;