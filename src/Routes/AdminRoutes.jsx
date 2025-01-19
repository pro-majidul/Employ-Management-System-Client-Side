import React from 'react';
import useRole from '../hooks/useRole';

const AdminRoutes = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <p>Loading ....</p>
    if (role === 'admin') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default AdminRoutes;