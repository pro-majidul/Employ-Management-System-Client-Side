import { useState } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { RiVerifiedBadgeFill } from "react-icons/ri";
// import useAuth from "../../../../hooks/UseAuth";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { toast } from "react-toastify";
import useEmployeData from "../../../../hooks/useEmployeData";
import { Helmet } from "react-helmet-async";
import Spineer from "../../../../Shared/Spineer";

const EmployeeList = () => {
    const [modalOpen, setModalOpen] = useState(false); // Modal state
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Selected employee for payment
    // const queryClient = useQueryClient();
    // const { user, loading } = useAuth();
    const secureAxios = useSecureAxios();
    const [employees, isLoading, isError, refetch] = useEmployeData()
    // Fetch employee data
    // const { data: employees = [], isLoading, isError, refetch } = useQuery({
    //     queryKey: ["all-employee"],
    //     enabled: user && !loading,
    //     queryFn: async () => {
    //         const res = await secureAxios.get("/employee-list");
    //         return res.data.map((employee) => ({
    //             ...employee,
    //             isVerified: employee.isVerified || false,
    //         }));
    //     },

    //     onError: (error) => {
    //         console.error("Error fetching employees:", error.message);
    //     },

    // });
// console.log(employees)
    // Toggle verification status
    const toggleVerification = async ({ id, isVerified }) => {
        await secureAxios.patch(`/users/employees/${id}`, { isVerified });
        refetch()
    }


    // Handle salary payment
    const handlePayment = async ({ id, month, year, salary, email,name }) => {
        try {
            const res = await secureAxios.post('/payrole', {
                employeeId: id,
                month,
                year,
                email,
                salary,
                name
            });
            // console.log(res.data)
            if (res.data.insertedId) {
                refetch()
                toast.success('payment Success')
                setModalOpen(false)
            }
        } catch (err) {
            // console.log(err.response.data.message)
            toast.error(`${err.response.data.message}`)
            setModalOpen(false);
        }

    }


    // Define table columns
    const columns = [
        { accessorKey: "name", header: "Name" },
        { accessorKey: "email", header: "Email" },
        {
            accessorKey: "isVerified",
            header: "Verified",
            cell: ({ row }) => (
                <button
                    onClick={() =>
                        toggleVerification({
                            id: row.original._id,
                            isVerified: !row.original.isVerified,
                        })
                    }
                    className={`${row.original.isVerified ? "text-green-500" : "text-red-500"
                        }`}
                >
                    <span className="text-center block">
                        {row.original.isVerified ? <RiVerifiedBadgeFill className="text-green-500 hover:text-white text-3xl text-center hover:bg-red-500 rounded-xl" /> : <RxCross2 className="text-white text-3xl text-center hover:bg-green-500 bg-red-500 rounded-xl" />}
                    </span>
                </button>
            ),
        },
        { accessorKey: "bankAccountNo", header: "Bank Account" },
        { accessorKey: "salary", header: "Salary" },
        {
            id: "pay",
            header: "Pay",
            cell: ({ row }) => (
                <button
                    disabled={!row.original.isVerified}
                    onClick={() => {
                        setSelectedEmployee(row.original);
                        setModalOpen(true);
                    }}
                    className={`${row.original.isVerified
                        ? "bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
                        : "bg-gray-400 text-white px-3 py-2 rounded cursor-not-allowed"
                        }`}
                >
                    Pay
                </button>
            ),
        },
        {
            id: "details",
            header: "Details",
            cell: ({ row }) => (
                <Link
                    to={`/dashboard/details/${row.original.email}`}
                    className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
                >
                    Details
                </Link>
            ),
        },
    ];

    // Create table instance
    const table = useReactTable({
        data: employees || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) {
        return <Spineer></Spineer>
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Failed to load employee data. Please try again later.
            </div>
        );
    }

    return (
        <div className="container mx-auto overflow-x-scroll p-4">
             <Helmet>
                <title>Employee Management || Employee List</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="border border-gray-300 p-2">
                                    {header.isPlaceholder ? null : header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-100">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border border-gray-300 p-2">
                                    {cell.column.columnDef.cell
                                        ? cell.column.columnDef.cell(cell.getContext())
                                        : cell.getValue()}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Payment Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white mx-3 p-6 w-full md:max-w-md md:mx-auto rounded shadow-lg">
                        <h2 className="text-xl font-bold">Pay Employee</h2>
                        <p className="my-3 text-xl">
                            Salary: <strong>{selectedEmployee.salary}</strong>
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const month = e.target.month.value;
                                const year = e.target.year.value;
                                handlePayment({
                                    id: selectedEmployee._id,
                                    month,
                                    email: selectedEmployee.email,
                                    year,
                                    salary: selectedEmployee.salary,
                                    name: selectedEmployee.name
                                });
                            }}
                        >
                            <label className="block text-sm font-medium text-gray-700">Month</label>
                            <select
                                name="month"
                                required
                                defaultValue='Select a month'
                                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                            >
                                <option disabled value="">Select a month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>


                            <label className="block mt-4">
                                Year:
                                <input
                                    type="number"
                                    name="year"
                                    required
                                    min="2000"
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
                            >
                                Confirm Payment
                            </button>
                        </form>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeList;
