import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import logo from '../../../assets/logo.png'


const Sidebar = () => {
    const { user, logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    //responsive hander 
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>

            {/* mobile device navbar show*/}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className="flex items-center gap-1">
                            <img src={logo} alt='logo' className="md:h-[50px] w-[30px] md:w-[50px] h-[30px]" />
                            <p className="md:text-2xl lg:text-3xl font-medium">Employee Management</p>
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
                    className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                        }  md:translate-x-0  transition duration-200 ease-in-out`}
                >
                    <div>
                        <div>
                            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                                <Link to='/' className="flex items-center gap-2">
                                    <img src={logo} alt='logo' className="md:h-[40px]  md:w-[40px] " />
                                    <p className="text-xl font-medium">Employee Management</p>
                                </Link>
                            </div>
                        </div>

                        {/* Nav Items */}
                        <div className='flex flex-col justify-between flex-1 mt-6'>
                            <ul className=" list-none">
                                <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                    <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/all-employee-list'>All Employee</NavLink>
                                </li>
                                <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                    <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/payroll'>Pay Role</NavLink>

                                </li>
                                <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                    <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/employee-list'>Employee List</NavLink>

                                </li>
                                <li className=' px-4 py-2 hover:bg-slate-300 my-1'>
                                    <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/progress'>Progress</NavLink>

                                </li>
                                {/* just emloyee */}
                                {user && <>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/dashboard/work-sheet'>Work Shit</NavLink>
                                    </li>
                                    <li className=' px-4 py-2 hover:bg-slate-300 my-1'>

                                        <NavLink className={(isActive) => isActive ? 'text-xl text-gray-700 ' : '  text-xl text-black '} to='/payment-history'>Payment History</NavLink>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <hr />
                        {/* 
          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          /> */}
                        <button
                            onClick={logOut}
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