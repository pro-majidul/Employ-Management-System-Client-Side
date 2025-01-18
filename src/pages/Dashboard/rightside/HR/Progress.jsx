import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { useEffect, useState } from "react";

const Progress = () => {
    const [selectedName, setSelectedName] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [totalHours, setTotalHours] = useState(0);
    const [allemails, setAllEmails] = useState([]);;
    const [allmonths, setAllmonths] = useState([])
    const SecureAxios = useSecureAxios()

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['employee-Task', selectedName, selectedMonth],
        queryFn: async () => {
            const res = await SecureAxios.get('/work-sheet', {
                params: {
                    name: selectedName || undefined,
                    month: selectedMonth || undefined,
                },
            });
            return res.data;
        }
    });
    
    useEffect(() => {
        const sumHours = tasks.reduce((sum, record) => sum + parseInt(record.hoursWorked, 10), 0);
        setTotalHours(sumHours);
    }, [tasks]);


    const getMonthYear = (date) => {
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('default', { month: 'long' }); // Get full month name
        const year = dateObj.getFullYear();
        return `${month} ${year}`;
    };

    useEffect(() => {

        const emails = Array.from(new Set(tasks.map((rec) => rec.email)));
        setAllEmails(emails)
        const month = Array.from(new Set(tasks.map((rec) => getMonthYear(rec.date))))
        setAllmonths(month)
    }, [])
    // console.log(emails)
    // setAllEmails(emails);






    const handelFilterEmail = (e) => {
        setSelectedName(e.target.value);
        refetch()
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Progress</h1>

            {/* Filters Section */}
            <div className="flex gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium">Employee Name</label>
                    <select
                        defaultValue={selectedName}
                        onChange={(e) => handelFilterEmail(e)}
                        className="border rounded p-2 w-full"
                    >
                        <option  value="">All Employees</option>
                        {/* {Array.from(new Set(tasks.map((rec) => rec.email))).map((email) => (
                            <option key={email} value={email}>
                                {email}
                            </option>
                        ))} */}
                        {allemails.map((email, index) => (
                            <option key={index} value={email}>
                                {email}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Month</label>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="border rounded p-2 w-full"
                    >
                        <option value="">All Months</option>
                        {/* {Array.from(new Set(tasks.map((rec) => getMonthYear(rec.date)))).map((monthYear) => (
                            <option key={monthYear} value={monthYear}>
                                {monthYear}
                            </option>
                        ))} */}
                        {allmonths.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Total Hours Section */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Total Work Hours: {totalHours}</h2>
            </div>

            {/* Work Records Table */}
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Employee Email</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Month</th>
                            <th className="border px-4 py-2">Hours Worked</th>
                            <th className="border px-4 py-2">Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((record) => {
                            const monthYear = getMonthYear(record.date);
                            return (
                                <tr key={record._id}>
                                    <td className="border px-4 py-2">{record.email}</td>
                                    <td className="border px-4 py-2">{new Date(record.date).toLocaleDateString()}</td>
                                    <td className="border px-4 py-2">{monthYear}</td>
                                    <td className="border px-4 py-2">{record.hoursWorked}</td>
                                    <td className="border px-4 py-2">{record.task}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Progress;