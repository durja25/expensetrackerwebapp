export const BASEURL = "https://expencetracker-5d5e.onrender.com/api/1.0";
const CLOUDINARY_NAME = "diccq3fjq";

const API_ENDPOINTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    UPLOAD_IMG: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
    GET_USER_INFO: "/me",
}

export {API_ENDPOINTS}