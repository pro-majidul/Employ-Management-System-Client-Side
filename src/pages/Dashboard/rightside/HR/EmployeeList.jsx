import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../../../hooks/UseAuth";
import useSecureAxios from "../../../../hooks/useSecureAxios";

const EmployeeList = () => {
    const [modalOpen, setModalOpen] = useState(false); // Modal state
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Selected employee for payment
    const queryClient = useQueryClient();
    const { user, loading } = useAuth();
    const secureAxios = useSecureAxios();

    // Fetch employee data
    const { data: employees = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["all-employee"],
        enabled: user && !loading,
        queryFn: async () => {
            const res = await secureAxios.get("/employee-list");
            return res.data.map((employee) => ({
                ...employee,
                isVerified: employee.isVerified || false,
            }));
        },
        onError: (error) => {
            console.error("Error fetching employees:", error.message);
        },
    });

    // Toggle verification status
    const toggleVerification = async ({ id, isVerified }) => {
        await secureAxios.patch(`/users/employees/${id}`, { isVerified });
        refetch()
    }


    // Handle salary payment
    //   const handlePayment = useMutation(
    //     async ({ id, month, year }) => {
    //       await secureAxios.post("/payroll", {
    //         employeeId: id,
    //         month,
    //         year,
    //       });
    //     },
    //     {
    //       onSuccess: () => {
    //         setModalOpen(false);
    //         queryClient.invalidateQueries(["all-employee"]);
    //       },
    //     }
    //   );

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
                    {row.original.isVerified ? "✅" : <RxCross2 className="text-red-500" />}
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
                    to={`/details/${row.original.email}`}
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
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading-spinner"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Failed to load employee data. Please try again later.
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
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
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold">Pay Employee</h2>
                        <p>
                            Salary: <strong>{selectedEmployee.salary}</strong>
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const month = e.target.month.value;
                                const year = e.target.year.value;
                                handlePayment.mutate({
                                    id: selectedEmployee._id,
                                    month,
                                    year,
                                });
                            }}
                        >
                            <label className="block mt-4">
                                Month:
                                <input
                                    type="number"
                                    name="month"
                                    required
                                    min="1"
                                    max="12"
                                    className="border rounded w-full p-2 mt-1"
                                />
                            </label>
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
