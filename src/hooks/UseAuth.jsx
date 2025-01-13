import { useContext } from "react";
import { AuthContext } from "../provider/Provider";

const UseAuth = () => {
    const users = useContext(AuthContext)
    return users
};

export default UseAuth;