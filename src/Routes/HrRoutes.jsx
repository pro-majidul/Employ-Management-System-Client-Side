import React from 'react';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';
import Spineer from '../Shared/Spineer';

const HrRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <Spineer></Spineer>
    if(role ==='HR') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default HrRoutes;