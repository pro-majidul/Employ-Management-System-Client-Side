import Lottie from "lottie-react";
import GoogleLogin from "../../Shared/GoogleLogin";
import loginImg from '../../assets/Animation - 1736793358121.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/UseAuth";
import { PiSpinnerLight } from "react-icons/pi";
import { toast } from "react-toastify";
import usePublicAxios from "../../hooks/usePublicAxios";

const SingIn = () => {
    const { userSignIn, setLoading, loading } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const publicAxios = usePublicAxios()

    const redirect = location?.state?.from || '/';
    // console.log('location is ', location, 'pathname is ', redirect)
    // console.log(location.state)
    const handelLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        // console.log(email)
        const password = e.target.password.value;
        try {
            setLoading(true)

            const res = await publicAxios.patch('/isFired', { email: email })
            if (res.data.modifiedCount > 0) {

                await userSignIn(email, password);
                toast.success('user Login Success')
                navigate(redirect)
            }
            // navigate(location?.state?.from)
        } catch (err) {
            // console.log(err)
            if (err.status === 404) {
                toast.error(`${err.response.data.message}`)
            } else {

                toast.error(`${err.code}`)
            }
            // toast.error(err.code)
            // console.log(err)
            // toast.error(`${err.response.data.message}`)
            // setLoading(false)
        }
        // finally {
        //     setLoading(false)
        // }

    }
    return (
        <section style={{
            backgroundImage: "url('https://i.ibb.co.com/dbBvzjq/vintage-grunge-blue-concrete-tex.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>

            <div className='max-w-7xl w-full mx-auto px-4'>

                <div className="min-h-[calc-(100vh-100px)] md:p-16 md:gap-16 md:flex items-center justify-center">
                    <Helmet>
                        <title>Employee Management || SignIn</title>
                    </Helmet>
                    <div className="flex-1 max-w-xl ">
                        <Lottie animationData={loginImg} loop={true} />
                    </div>
                    <div className="bg-gray-300 flex-1 p-8 rounded-lg shadow-md w-full max-w-xl">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            Sign In
                        </h1>
                        <form onSubmit={handelLogin} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete='username'
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-start text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete='current-password'
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                >
                                    {loading ? <PiSpinnerLight className="text-2xl spin" /> : 'Sign In'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <GoogleLogin></GoogleLogin>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Dont have an account?
                            <Link to='/signup'>
                                <button
                                    type="button"
                                    className="font-medium ml-1 text-sky-600 hover:text-sky-500"
                                >
                                    Register
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingIn;
