import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://b10a12-server-side-pro-majidul-h97ff9ouq.vercel.app',
})
const usePublicAxios = () => {
    return publicAxios
};

export default usePublicAxios;