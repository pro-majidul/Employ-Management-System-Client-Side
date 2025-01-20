import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Spineer from "../Shared/Spineer";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
    const location = useLocation()

    // console.log(location);
    const { user, loading } = useAuth();
    // console.log(loading)

    console.log('loading', loading, 'user is', user)
    if (loading) {
        return <Spineer></Spineer>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location.pathname }} replace></Navigate>
};

export default Private;