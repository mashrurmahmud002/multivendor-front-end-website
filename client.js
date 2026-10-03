import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_CATEGORY,
    headers: {
        "Content-Type": "application/json",
    },
});


export const productInstance = axios.create({
    baseURL: import.meta.env.VITE_VENDOR_PRODUCT_UPLOAD,
    headers: {
        "Content-Type": "application/json",
    },
});

export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_AUTH,
    headers: {
        "Content-Type": "application/json",
    },
});