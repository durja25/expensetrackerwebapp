import axios from "axios";
import {BASEURL} from "./ApiEndpoints.js";

const axiosConfig = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const excludeEndpoints = ["/login", "/register", "/status", "/activate", "/health"];

// Request interceptors
axiosConfig.interceptors.request.use((config) => {
    const skipToken = excludeEndpoints.some((endpoint) => {
        config.url?.includes(endpoint)
    });

    if (!skipToken) {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
    }
    return config;

}, (err) => {
    return Promise.reject(err);
});


// Response interceptors
axiosConfig.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response) {
        if (err.status === 401) {
            window.location.href = "/login";
            console.error("Response interceptors 401 :"+err.message);

        } else if (err.status === 500) {
            console.error("Response interceptors 500 :"+err.message);
        }
    } else if (err.code === "ECONNRESET") {
        console.error("Response interceptors ECONNRESET  :"+err.message);

    }
    return Promise.reject(err);
});

export default axiosConfig;