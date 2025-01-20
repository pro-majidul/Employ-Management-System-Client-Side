import useAuth from '../../../hooks/UseAuth';
import { Calendar} from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};



const ManDashboard = () => {
    const { user } = useAuth()
    return (
        <div className=" min-h-screen p-6">
            {/* Welcome Section */}
            <header className="text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 text-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl md:text-3xl font-bold">Welcome, {user.displayName}!</h1>
                <p className="mt-2 text-base md:text-lg">
                    Empowering teams and simplifying employee management for better results.
                </p>
            </header>


            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* User Info Section */}
                <div
                    className="p-6 rounded-md shadow-lg bg-white">
                    <div className="text-center">
                        {/* Profile Image with Gradient Border */}
                        <div className="w-28 flex items-center justify-center h-28 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-2 border-white"
                            />
                        </div>
                        <h2 className="text-xl mt-4 font-bold">{user.displayName}</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Hard work is the key that unlocks the door to success.
                        </p>
                    </div>
                    <div className="mt-6 text-gray-700">
                        <p className="text-sm">
                            <span className="font-semibold">Department:</span> Marketing
                        </p>
                        <p className="text-sm mt-2">
                            <span className="font-semibold">Position:</span> Digital Marketing Specialist
                        </p>
                        <p className="text-sm mt-2">
                            <span className="font-semibold">Phone Number:</span> +1 (555) 123-4567
                        </p>
                        <p className="text-sm mt-2">
                            <span className="font-semibold">Email:</span> {user.email}
                        </p>
                    </div>
                </div>
                {/* Right Section: Calendar */}
                <div className='shadow-md'>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
            </div>
        </div>

    );
};

export default ManDashboard;
