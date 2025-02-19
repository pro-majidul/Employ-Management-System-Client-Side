import { FaBalanceScale, FaChalkboardTeacher, FaChartLine, FaMoneyBillAlt, FaRegClock, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurService = () => {
  

    const services = [
        {
            title: 'Recruitment & Onboarding',
            description: 'Streamline your hiring process with an intuitive, automated workflow to integrate new employees effortlessly.',
            icon: <FaUserTie className="h-8 w-8 text-teal-600 transition duration-300 ease-in-out group-hover:text-teal-800" />
        },
        {
            title: 'Performance Tracking & Analytics',
            description: 'Measure employee success and foster growth with smart performance management and detailed analytics.',
            icon: <FaChartLine className="h-8 w-8 text-orange-600 transition duration-300 ease-in-out group-hover:text-orange-800" />
        },
        {
            title: 'Time & Attendance Management',
            description: 'Accurately track employee hours, schedules, and attendance with minimal effort, promoting transparency.',
            icon: <FaRegClock className="h-8 w-8 text-purple-600 transition duration-300 ease-in-out group-hover:text-purple-800" />
        },
        {
            title: 'Payroll & Benefits Processing',
            description: 'Seamlessly process payroll with precision, manage deductions, and ensure compliance with tax regulations.',
            icon: <FaMoneyBillAlt className="h-8 w-8 text-blue-600 transition duration-300 ease-in-out group-hover:text-blue-800" />
        },
        {
            title: 'Employee Development & Training',
            description: 'Offer personalized development opportunities and training programs to boost skills and employee engagement.',
            icon: <FaChalkboardTeacher className="h-8 w-8 text-yellow-600 transition duration-300 ease-in-out group-hover:text-yellow-800" />
        },
        {
            title: 'Compliance & Legal Risk Management',
            description: 'Stay updated with changing labor laws and maintain compliance to avoid risks and safeguard your business.',
            icon: <FaBalanceScale className="h-8 w-8 text-green-600 transition duration-300 ease-in-out group-hover:text-green-800" />
        }
    ];
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden border rounded-lg hover:shadow-2xl transition-all  duration-300 ease-in-out"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-base text-gray-500">{service.description}</p>
                                <Link to='/aboutus' className="text-lg font-medium text-gray-900 mb-2">See More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurService;