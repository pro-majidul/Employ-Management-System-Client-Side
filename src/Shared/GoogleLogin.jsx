import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/UseAuth';


const GoogleLogin = () => {
    const { googleLogin } = useAuth()
    const handelGoogleLogin =  () => {
        googleLogin()
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

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