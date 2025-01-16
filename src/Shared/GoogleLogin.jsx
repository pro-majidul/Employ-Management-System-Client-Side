import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/UseAuth';
import usePublicAxios from '../hooks/usePublicAxios';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleLogin = () => {
    const { googleLogin, setLoading } = useAuth()
    const publicAxios = usePublicAxios()
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.state || '/';

    const handelGoogleLogin = async () => {
        setLoading(true)
        try {
            const result = await googleLogin()
            console.log(result.user);
            navigate(redirect)
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email,
                role: 'Employee'
            }
        } catch (err) {
            console.log(err);
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