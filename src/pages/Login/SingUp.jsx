import Lottie from "lottie-react";
import GoogleLogin from "../../Shared/GoogleLogin";
import registerImg from '../../assets/Animation - 1736793165310.json'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import { PiSpinnerLight } from "react-icons/pi";
import { useState } from "react";

const SingUp = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const imagefile = { image: data.photo[0] }
        setLoading(true)
        try {
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_key}`, imagefile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const photo = res.data.data.url;
            console.log(photo)


        } catch (err) {
            console.log(err)

        } finally {
            setLoading(false)
        }


    }
    return (
        <section className='max-w-7xl pt-16 w-full mx-auto px-4'>

            <div className="min-h-screen md:flex items-center md:p-16 md:gap-16 justify-center bg-gray-100">
                <div className="flex-1 max-w-xl">
                    <Lottie animationData={registerImg} loop={true} />
                </div>
                <div className="bg-white flex-1 p-8 rounded-lg shadow-md w-full max-w-xl">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        Register Now
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div >
                            <label htmlFor="email" className="block text-start  text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                {...register("name", { required: true })}
                                autoComplete="username"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="you@example.com"
                                required
                            />
                            {errors.email?.type === "required" && (
                                <p role="alert" className='text-red-600'>email name is required</p>
                            )}
                        </div>
                        <div >
                            <label className="block text-start  text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", { required: true, maxLength: 5, pattern: /^[a-z0-9]+$/ })}
                                autoComplete="current-password"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="password"
                                required
                            />
                            {errors.password?.type === "required" && (
                                <p className='text-red-500'>Password is required</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-500'>password must less than 6 charecter</p>
                            )}

                            {errors.password?.type === "pattern" && (
                                <p className='text-red-500'> dont use any capital letters and special characters</p>
                            )}
                        </div>
                        <div >
                            <label htmlFor="role" className="block text-start   text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                {...register("role", { required: true })}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                                required
                            >
                                <option disabled value="">Select a role</option>
                                <option value="Employee">Employee</option>
                                <option value="HR">HR</option>
                            </select>
                            {errors.role?.type === "required" && (
                                <p role="alert" className='text-red-600'>Role name is required</p>
                            )}
                        </div>
                        <div >
                            <label htmlFor="bankAccountNo" className="block text-start  text-sm font-medium text-gray-700">
                                Bank Account Number
                            </label>
                            <input
                                type="text"
                                id="bankAccountNo"
                                name="bankAccountNo"
                                {...register("bankAccountNo", { required: true })}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Enter your bank account number"
                            />
                            {errors.bankAccountNo?.type === "required" && (
                                <p role="alert" className='text-red-600'>bankAccountNo number is required</p>
                            )}
                        </div>
                        <div >
                            <label htmlFor="salary" className="block text-start  text-sm font-medium text-gray-700">
                                Salary
                            </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                {...register("salary", { required: true })}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="Enter your salary"
                            />
                            {errors.salary?.type === "required" && (
                                <p role="alert" className='text-red-600'>salary is required</p>
                            )}
                        </div>
                        <div >
                            <label htmlFor="designation" className="block text-start  text-sm font-medium text-gray-700">
                                Designation
                            </label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                {...register("designation", { required: true })}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                placeholder="e.g., Sales Assistant, Digital Marketer"
                            />
                            {errors.designation?.type === "required" && (
                                <p role="alert" className='text-red-600'>designation name is required</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="photo" className="block text-sm text-start font-medium text-gray-700">
                                Photo
                            </label>
                            <input
                                type="file"
                                id="photo"
                                {...register("photo", { required: true })}
                                name="photo"
                                accept="image/*"
                                className="mt-1 block w-full text-sm text-gray-500
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-md file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-sky-50 file:text-sky-700
                                       hover:file:bg-sky-100"
                            />
                            {errors.photo?.type === "required" && (
                                <p className='text-red-500'>Image Filed is Required</p>
                            )}
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                            >
                                {loading ? <PiSpinnerLight className="text-2xl spin" /> : 'Register'}
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
                    <p className="mt-4  text-center text-sm text-gray-600">
                        Already have an account?
                        <Link to='/signin'>
                            <button
                                type="button"

                                className="font-medium ml-1 text-sky-600 hover:text-sky-500"
                            >
                                Sign In
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingUp;