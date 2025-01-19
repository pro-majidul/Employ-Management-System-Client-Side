import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/UseAuth';
import usePublicAxios from '../hooks/usePublicAxios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const GoogleLogin = () => {
    const { googleLogin, setUser, logoutUser, setLoading } = useAuth()
    const publicAxios = usePublicAxios()
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location?.state?.from || '/';

    const handelGoogleLogin = async () => {
        setLoading(true)
        try {
            const result = await googleLogin()
            console.log(result.user);
            setUser(result.user)
            navigate(redirect)
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email,
                role: 'Employee',
                bankAccountNo: Math.floor(Math.random() * 9000000000) + 1000000000,
                salary: Math.floor(Math.random() * 5000) + 5000,
                designation: 'Employee',
                image: result.user.photoURL,
                isVerified: true,
            }

            const res = await publicAxios.put('/users', userInfo);
            console.log(res, 'line 34')
            console.log(res.data)
            toast.success('user login SuccessFull')
        } catch (err) {
            console.log(err);
            if (err.status === 404) {
                logoutUser()
                setUser(null)
            }
            if (err.response.data.message) {
                toast.success(`${err.response.data.message}`)
            } else {

                toast.error(`${err.code}`)
            }
            console.log('err is', err.response.data.message)
        } finally {
            setLoading(false)
        }


    }

    return (
        <button
            onClick={handelGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
            <FcGoogle className="h-5 w-5 mr-2" />
            Sign in with Google
        </button>
    );
};

export default GoogleLogin;