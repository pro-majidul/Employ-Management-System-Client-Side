import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Spineer from "../Shared/Spineer";

const EmployeeRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <Spineer></Spineer>
    if(role ==='Employee') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default EmployeeRoutes;