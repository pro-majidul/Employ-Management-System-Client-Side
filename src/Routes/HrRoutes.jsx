import React from 'react';
import useRole from '../hooks/useRole';

const HrRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <p>Loading..</p>
    return (
        <div>
            
        </div>
    );
};

export default HrRoutes;