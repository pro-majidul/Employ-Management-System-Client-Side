import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
    const location = useLocation()

    // console.log(location);
    const { user, loading } = useAuth();
    // console.log(loading)

    console.log('loading', loading, 'user is', user)
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading-spinner"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location.pathname }} replace></Navigate>
};

export default Private;