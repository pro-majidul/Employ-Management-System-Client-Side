import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import logo from '../../../assets/logo.png'
import { toast } from "react-toastify";
import useRole from "../../../hooks/useRole";


const Sidebar = () => {
    const { user, logoutUser } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isLoading] = useRole()
    //responsive hander 
    const handleToggle = () => {
        setActive(!isActive)
    }
    // log out user
    const handelLogOut = () => {
        logoutUser()
        toast.success('user Logout Success')
    }
    return (
        <>

            {/* mobile device navbar show*/}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className="flex items-center gap-1">
                            <img src={logo} alt='logo' className="md:h-[50px] w-[30px] md:w-[50px] h-[30px]" />
                            <p className="md:text-2xl mb-0 lg:text-3xl font-medium">Employee Management</p>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* sidebar full desktop device */}
            <div>
                <div
                    className={`z-10  flex flex-col min-h-screen justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4  inset-y-0 absolute top-0 transform ${isActive && '-translate-x-full'
                        }  md:translate-x-0  transition duration-200 ease-in-out`}
                >
                    <div>
                        <div>
                            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                                <Link to='/' className="flex items-center gap-2">
                                    <img src={logo} alt='logo' className="md:h-[40px]  md:w-[40px] " />
                                    <p className="text-xl mb-0 font-medium">Employee Management</p>
                                </Link>
                            </div>
                        </div>

                        {/* Nav Items */}
                        <div className='flex flex-col justify-between flex-1 mt-6'>
                            <ul className=" list-none">
                                {/* only Admin */}

                                {role === 'admin' && <>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/all-employee-list'>All Employee</NavLink>
                                    </li>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/payroll'>Pay Role</NavLink>

                                    </li>
                                </>}
                                {/* just Hr */}
                                {role === 'HR' && <>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/employee-list'>Employee List</NavLink>

                                    </li>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/progress'>Progress</NavLink>

                                    </li>
                                </>}
                                {/* just emloyee */}
                                {role === 'Employee' && <>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/work-sheet'>Work Shit</NavLink>
                                    </li>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/payment-history'>Payment History</NavLink>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>

                    <div >
                        <hr />
                        {/* 
          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          /> */}
                        <button
                            onClick={handelLogOut}
                            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;