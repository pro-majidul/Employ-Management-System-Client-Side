import { Outlet } from "react-router-dom";
import Sidebar from "./leftside/Sidebar";

const Dashboard = () => {
    return (

        <div className='md:flex w-full max-w-7xl mx-auto'>
            {/* left side*/}
            <div>
                <Sidebar></Sidebar>
            </div>
            {/* right  side */}
            <div className='flex-1  md:ml-64'>
                <div className="p-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;