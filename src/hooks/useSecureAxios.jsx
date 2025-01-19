import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./UseAuth";

const secureAxios = axios.create({
    baseURL: 'http://localhost:9000',
})
const useSecureAxios = () => {
    // const { userLogout } = useUsers()
    const {logoutUser}= useAuth()
    const navigate = useNavigate()

    // interceptor for request to set a header authorizetion tokent when user call data 
    secureAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = (`Bearer ${token}`);
        return config

    }, (error => {
        return Promise.reject(error)
    }))

    // interceptor for response when the wrong response come

    secureAxios.interceptors.response.use((response => {
        return response;
    }), async (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
            // console.log('error');
            await logoutUser()
            navigate('/signin')
        }
        return Promise.reject(error)
    })


    return secureAxios
};

export default useSecureAxios;