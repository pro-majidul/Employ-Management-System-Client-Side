import { Link } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useState } from "react";
import logo from '../assets/logo.png'
import avatarImg from '../assets/avator.jpg'
import { Helmet } from "react-helmet-async";


const Navbar = () => {
    const { user, logoutUser } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed w-full bg-green-500 top-0 z-10 shadow-sm'>
            <Helmet>
                <title>Employee Management || Home</title>
            </Helmet>
            <div className=' py-2 border-b-[1px]'>
                <div className='max-w-7xl w-full mx-auto px-4'>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <Link to='/' className="flex items-center gap-1">
                            <img src={logo} alt='logo' className="md:h-[50px] w-[30px] md:w-[50px] h-[30px]" />
                            <p className="md:text-2xl lg:text-3xl font-medium">Employee Management</p>
                        </Link>
                        <div className="hidden md:block ">
                            <Link
                                to='/dashboard'
                                className='lg:px-4 lg:py-3 hover:text-green-300 transition font-semibold'
                            >
                                Dashboard
                            </Link>
                            <Link
                                to='/contactus'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-green-300 transition font-semibold'
                            >
                                Contact Us
                            </Link>
                            <Link
                                to='/signin'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-green-300 transition font-semibold'
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-green-300 transition font-semibold'
                            >
                                Sign Up
                            </Link>
                        </div>
                        <div>
                            {/* Dropdown Menu */}
                            <div className='relative'>
                                <div className='flex flex-row items-center gap-3'>
                                    {/* Dropdown btn */}
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className='p-1 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                    >
                                        <div>
                                            {/* Avatar */}
                                            <img
                                                className='rounded-full h-[25px] w-[25px] md:h-[35px] md:w-[35px]'
                                                referrerPolicy='no-referrer'
                                                src={user && user.photoURL ? user.photoURL : avatarImg}
                                                alt='profile'

                                            />
                                        </div>
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                        <div className='flex flex-col cursor-pointer'>
                                            {user ? (
                                                <>
                                                    <Link
                                                        to='/dashboard'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold md:hidden'
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        to='/contactus'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition md:hidden font-semibold'
                                                    >
                                                        Contact Us
                                                    </Link>
                                                    <div
                                                        onClick={logoutUser}
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                    >
                                                        Logout
                                                    </div>

                                                </>
                                            ) : (
                                                <>
                                                    <Link
                                                        to='/dashboard'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        to='/contactus'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Contact Us
                                                    </Link>
                                                    <Link
                                                        to='/signin'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        to='/signup'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Sign Up
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;