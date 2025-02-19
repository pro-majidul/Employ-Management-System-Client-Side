import { Link } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { useState } from "react";
import logo from '../assets/logo.png'
import avatarImg from '../assets/avator.jpg'
import { Helmet } from "react-helmet-async";


const Navbar = () => {
    const { user, logoutUser, darkMode, setDarkMode } = useAuth()
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='fixed w-full bg-gray-100 bg-opacity-85 top-0 z-10 shadow-sm'>
            <Helmet>
                <title>Employee Management || Home</title>
            </Helmet>
            <div className=' py-2 border-b-[1px]'>
                <div className='max-w-7xl w-full mx-auto px-4'>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}

                        <div>
                            <Link to='/' className="flex gap-1 items-center justify-center">
                                <div className="md:h-[50px] w-[30px] md:w-[50px] h-[30px]">
                                    <img src={logo} alt='logo' className="w-full" />
                                </div>
                                <p className="md:text-2xl mb-0  lg:text-3xl font-medium">Employee Management</p>
                            </Link>
                        </div>

                        <div className="hidden md:block ">
                            <Link
                                to='/'
                                className='lg:px-4 lg:py-3 hover:text-gray-600 transition font-semibold'
                            >
                                Home
                            </Link>
                            {
                              user &&  <Link
                                to='/dashboard'
                                className='lg:px-4 lg:py-3 hover:text-gray-600 transition font-semibold'
                            >
                                Dashboard
                            </Link>
                            }
                            {
                              user &&  <Link
                                to='/allemployee'
                                className='lg:px-4 lg:py-3 hover:text-gray-600 transition font-semibold'
                            >
                                AllEmployee
                            </Link>
                            }
                            <Link
                                to='/contactus'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-gray-600 transition font-semibold'
                            >
                                Contact Us
                            </Link>
                            <Link
                                to='/aboutus'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-gray-600 transition font-semibold'
                            >
                                About Us
                            </Link>
                            {
                                user &&  <Link
                                to='/blogpage'
                                className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-gray-600 transition font-semibold'
                            >
                                Blogs
                            </Link>
                            }

                            {!user && <>
                                <Link
                                    to='/signin'
                                    className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-gray-600 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='lg:px-4 lg:py-3 ml-2 lg:ml-0 hover:text-gray-600 transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>}
                            
                            
                        </div>
                        <div>
                            {/* Dropdown Menu */}
                            <div className='relative'>
                                <div className='flex flex-row items-center md:gap-3 gap-1'>
                                    {/* Dropdown btn  theme control */}
                                    <div onClick={() => setDarkMode(!darkMode)}>
                                        {darkMode ? <svg
                                            className=" md:h-10 md:w-10  h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                        </svg> : <svg
                                            className=" md:h-10 md:w-10 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                        </svg>}

                                    </div>
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
                                                        to='/'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold md:hidden'
                                                    >
                                                        Home
                                                    </Link>
                                                    <Link
                                                        to='/dashboard'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold md:hidden'
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        to='/allemployee'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold md:hidden'
                                                    >
                                                        AllEmployee
                                                    </Link>
                                                    <Link
                                                        to='/contactus'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition md:hidden font-semibold'
                                                    >
                                                        Contact Us
                                                    </Link>
                                                    <Link
                                                        to='/aboutus'
                                                         className='px-4 py-3 hover:bg-neutral-100 transition md:hidden font-semibold'
                                                    >
                                                        About Us
                                                    </Link>
                                                    <Link
                                                        to='/blogpage'
                                                         className='px-4 py-3 hover:bg-neutral-100 transition md:hidden font-semibold'
                                                    >
                                                        Blogs
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
                                                        to='/'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Home
                                                    </Link>
                                                    <Link
                                                        to='/dashboard'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        to='/allemployee'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        AllEmployee
                                                    </Link>
                                                    <Link
                                                        to='/contactus'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Contact Us
                                                    </Link>
                                                    <Link
                                                        to='/aboutus'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        About Us
                                                    </Link>
                                                    <Link
                                                        to='/blogpage'
                                                        className='px-4 md:hidden py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Blogs
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