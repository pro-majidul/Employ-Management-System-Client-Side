import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'http://localhost:9000',
})
const usePublicAxios = () => {
    return publicAxios
};

export default usePublicAxios;

// https://b10a12-server-side-pro-majidul.vercel.app