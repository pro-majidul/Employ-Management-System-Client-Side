import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://b10a12-server-side-pro-majidul.vercel.app',
})
const usePublicAxios = () => {
    return publicAxios
};

export default usePublicAxios;

// https://b10a12-server-side-pro-majidul.vercel.app

// 'http://localhost:9000',