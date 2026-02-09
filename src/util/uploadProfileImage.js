import {API_ENDPOINTS} from "./apiEndpoints";


const CLOUDINARY_UPLOAD_PRESET = "expensetracker";

const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(API_ENDPOINTS.UPLOAD_IMG, {
            method: "POST",
            body: formData,

        })

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Something went wrong : ${error.error.message}`,);
        }

        const image = await response.json();
        console.log("image uploaded", image);
        return image.secure_url;

    } catch (error) {
        console.error("Something went wrong", error);
        throw error;
    }
}
export default uploadProfileImage;