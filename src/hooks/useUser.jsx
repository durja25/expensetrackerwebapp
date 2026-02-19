import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import axiosConfig from "../util/axiosConfig.jsx";
import {API_ENDPOINTS} from "../util/ApiEndpoints.js";

export const useUser = () => {
    const {user, setUser, clearUser} = useContext(AppContext)
    let navigateFunction = useNavigate();

    useEffect(() => {
        if (user) {
            return;
        }
        let isMounted = true;

        const fetchUser = async () => {
            try {

                const response = await axiosConfig.get(API_ENDPOINTS.GET_USER_INFO);
                if (isMounted && response.data) {
                    setUser(response.data);
                }

            } catch (error) {
                console.log(error)
                if (isMounted) {
                    clearUser();
                    navigateFunction("/login");
                }
            }
        }

        fetchUser();

        return () => {
            isMounted = false;
        }


    }, setUser, clearUser, navigateFunction);
}