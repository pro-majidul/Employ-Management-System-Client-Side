import { useParams } from "react-router-dom";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const EmployeDetails = () => {
    const { email } = useParams(); // Slug হিসেবে email নেওয়া
    const axiosSecure = useSecureAxios();

    // Fetching Employee Data from Backend
    const { data: info = {} } = useQuery({
        queryKey: ["user-info", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/details/${email}`);
            return res.data;
        },
    });
    console.log(info)

    // Prepare Data for Bar Chart
    const chartData = info.months?.map((month, index) => ({
        monthYear: `${month.slice(0, 3)} ${info.years[index].slice(2, 4)}`,
        salary: info.salaries[index],

    }));

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
                {/* Employee Information */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
                    {/* Profile Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {info.image ? (
                            <img
                                src={info.image}
                                alt={info.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-500 text-sm">No Image</span>
                        )}
                    </div>
                    {/* Employee Details */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            {info.name}
                        </h1>
                        <p className="text-gray-600 text-lg">{info.designation}</p>
                    </div>
                </div>

                {/* Bar Chart Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Salary vs Month & Year
                    </h2>
                    <div className="overflow-x-auto">
                        <BarChart
                            width={Math.min(window.innerWidth - 50, 600)}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monthYear" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="salary" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeDetails;
