// import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { useState } from "react";
import { getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table";
import { Modal, Input, Form } from "antd";
import "antd/dist/reset.css";
import { FaFire } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { toast } from "react-toastify";
import UseEmployee from "../../../../hooks/UseEmployee";
import AllEmployCardView from "./AllEmployCardView";
import { Helmet } from "react-helmet-async";

const AllEmployee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [newSalary, setNewSalary] = useState(0);
    const [oldSalary, setOldSalary] = useState(0)
    const [view, setView] = useState('table')

    const secureAxios = useSecureAxios();
    // const { data: employees = [], refetch } = useQuery({
    //     queryKey: ["all-Employees"],
    //     queryFn: async () => {
    //         const res = await secureAxios.get("/all-employee-list");
    //         return res.data;
    //     },
    // });
    const [employees, refetch] = UseEmployee()

    const handleMakeHR = async (id) => {
        try {
            const res = await secureAxios.patch(`/admin/make-hr/${id}`);
            if (res.data.modifiedCount > 0) {
                toast.success('This Employee Now HR')
            }
            console.log(res)
            refetch();
        } catch (error) {
            console.error("Error promoting to HR:", error);
        }
        // console.log(id)
    };

    const handleFire = async (id) => {
        try {
            const res = await secureAxios.patch(`/admin/fire/${id}`);
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                toast.success('user fired Successfull')
            }
            refetch();
        } catch (error) {
            console.error("Error firing employee:", error);
        }

    };

    const handleOpenSalaryModal = (employee) => {
        setSelectedEmployee(employee);
        setOldSalary(employee.salary)
        setNewSalary(employee.salary);
        setIsModalOpen(true);
    };

    const handleUpdateSalary = async () => {
        try {
            if (newSalary <= oldSalary) {
                return toast.error('can not decrease salary Only Increase')
            }
            const res = await secureAxios.patch(`/admin/update-salary/${selectedEmployee._id}`, { newSalary });
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                toast.success('Salary Update SuccessFull')
            }
            refetch();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error updating salary:", error);
        }
    };

    const columns = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "designation",
            header: "Designation",
        },
        {
            accessorKey: "bankAccountNo",
            header: "Bank Account",
        },
        {
            accessorKey: "salary",
            header: "Salary",
        },
        {
            accessorKey: 'makeHR',
            header: 'Make HR',
            cell: ({ row }) =>
                row.original.role !== 'HR' && row.original.role !== 'admin'&& (
                    <button
                        className=" px-2 py-2 rounded"
                        onClick={() => handleMakeHR(row.original._id)}
                    >
                        {row.original._id && '[ ]'}
                    </button>
                ) || <GrStatusGood className=" text-black text-2xl" />
        },
        {
            accessorKey: 'fire',
            header: 'Fire',
            cell: ({ row }) => (
                !row.original.isFired ?
                    <button

                        onClick={() => handleFire(row.original._id)}
                    >
                        <FaFire className="text-red-500 text-2xl" />
                    </button> : <span className="text-red-600 font-bold">Fired</span>
            ),
        },
        {
            accessorKey: 'updateSalary',
            header: 'Update Salary',
            cell: ({ row }) => (
                <button
                    onClick={() => handleOpenSalaryModal(row.original)}
                >
                    <GrDocumentUpdate className="text-2xl" />
                </button>
            ),
        },
    ];

    const table = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    console.log(view)
    return (
        <div className="container mx-auto p-4">
             <Helmet>
                <title>Employee Management || All Employee</title>
            </Helmet>
            <h3 className="text-2xl font-bold mb-6 text-center">All Employee List</h3>

            <div className="w-32 mb-6">
                <label className="block text-sm font-medium text-gray-700"> Selecet View</label>
                <select name="view" onClick={(e) => setView(e.target.value)} className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm">
                    <option selected value='table'>Table View</option>
                    <option value='card'>Card View</option>
                </select>
            </div>
            {view == "table" &&

                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr className="bg-gray-200" key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className="border px-4 py-2"
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="border-t hover:bg-gray-50">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="border px-4 py-2">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
            {view == 'card' && <AllEmployCardView employees={employees} handleMakeHR={handleMakeHR} handleOpenSalaryModal={handleOpenSalaryModal} handleFire={handleFire} handleUpdateSalary={handleUpdateSalary}></AllEmployCardView>}
            <Modal
                title="Update Salary"
                open={isModalOpen}
                onOk={handleUpdateSalary}
                onCancel={() => setIsModalOpen(false)}
                className="responsive-modal"
            >
                <Form>
                    <Form.Item label="New Salary">
                        <Input
                            type="number"
                            value={newSalary}
                            onChange={(e) => setNewSalary(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    );
};

export default AllEmployee;
