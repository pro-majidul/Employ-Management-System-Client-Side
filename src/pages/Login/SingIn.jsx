import Lottie from "lottie-react";
import GoogleLogin from "../../Shared/GoogleLogin";
import loginImg from '../../assets/Animation - 1736793358121.json'

const SingIn = () => {
    return (
        <div className="min-h-screen md:p-16 md:gap-16 md:flex items-center justify-center bg-gray-100">
            <div className="flex-1">
            <Lottie animationData={loginImg} loop={true} />
            </div>
            <div className="bg-white flex-1 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Sign In
                </h1>
                <form className="space-y-4">
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
                            Sign In
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
                    <button
                        type="button"
                        className="font-medium ml-1 text-sky-600 hover:text-sky-500"
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SingIn;
