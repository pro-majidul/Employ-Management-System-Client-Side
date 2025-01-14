import { useContext } from "react";
import { AuthContext } from "../provider/Provider";

const useAuth = () => {
    const users = useContext(AuthContext)
    return users
};

export default useAuth;