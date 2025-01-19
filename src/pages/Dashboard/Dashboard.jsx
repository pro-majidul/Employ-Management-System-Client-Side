import { Outlet } from "react-router-dom";
import Sidebar from "./leftside/Sidebar";
import { createContext, useState } from "react";
export const taskContext = createContext(null)
const Dashboard = () => {
    const [workseetUpdate, setWorkseetUpdate] = useState(false)
    return (

        <div className='md:flex w-full max-w-7xl mx-auto'>
            {/* left side*/}
            <div>
                <Sidebar></Sidebar>

            </div>
            {/* right  side */}
            <div className='flex-1  md:ml-64'>
                <div className="p-5">
                    <taskContext.Provider value={{ workseetUpdate, setWorkseetUpdate }}>

                        <Outlet></Outlet>
                    </taskContext.Provider>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;