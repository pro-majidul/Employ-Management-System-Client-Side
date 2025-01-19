import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const EmployeeRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <p>Loading..</p>
    if(role ==='Employee') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default EmployeeRoutes;