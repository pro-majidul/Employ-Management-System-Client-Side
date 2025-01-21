import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Spineer = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>)

};

export default Spineer;