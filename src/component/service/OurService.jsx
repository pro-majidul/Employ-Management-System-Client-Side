import { FaBriefcase, FaCalendar, FaChartBar, FaClipboardList, FaUserSecret } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";


const OurService = () => {
    const services = [
        {
          title: 'Recruitment and Onboarding',
          description: 'Streamline your hiring process and seamlessly integrate new employees into your organization.',
          icon: <FaUserSecret className="h-6 w-6 text-blue-500" />
        },
        {
          title: 'Performance Management',
          description: 'Set goals, track progress, and provide meaningful feedback to boost employee productivity.',
          icon: <FaChartBar className="h-6 w-6 text-green-500" />
        },
        {
          title: 'Time and Attendance',
          description: 'Efficiently manage employee schedules, time-off requests, and attendance tracking.',
          icon: <FaCalendar className="h-6 w-6 text-purple-500" />
        },
        {
          title: 'Payroll Processing',
          description: 'Ensure accurate and timely payroll processing with our advanced payroll management system.',
          icon: <FaBriefcase className="h-6 w-6 text-red-500" />
        },
        {
          title: 'Employee Training',
          description: 'Develop your workforce with customized training programs and skill development initiatives.',
          icon: <FaClipboardList className="h-6 w-6 text-yellow-500" />
        },
        {
          title: 'Compliance Management',
          description: 'Stay up-to-date with labor laws and regulations to maintain legal compliance.',
          icon: <FaShield className="h-6 w-6 text-indigo-500" />
        }
      ]
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-2xl transition-all  duration-300 ease-in-out"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-base text-gray-500">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurService;