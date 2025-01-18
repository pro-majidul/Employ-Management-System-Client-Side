import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../../hooks/useSecureAxios";
import { useState } from "react";
import { getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table";
import { Modal, Input, Form } from "antd";
import "antd/dist/reset.css";
import { FaFire } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import { toast } from "react-toastify";

const AllEmployee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [newSalary, setNewSalary] = useState(0);

    const secureAxios = useSecureAxios();
    const { data: employees = [], refetch } = useQuery({
        queryKey: ["all-Employees"],
        queryFn: async () => {
            const res = await secureAxios.get("/all-employee-list");
            return res.data;
        },
    });

    const handleMakeHR = async (id) => {
        try {
            const res = await secureAxios.patch(`/admin/make-hr/${id}`);
            if (res.data.modifiedCount > 0) {
                toast.success('Make HR Success')
            }
            console.log(res)
            refetch();
        } catch (error) {
            console.error("Error promoting to HR:", error);
        }
        // console.log(id)
    };

    const handleFire = async (id) => {
        // try {
        //     await secureAxios.post(`/admin/fire/${id}`);
        //     refetch();
        // } catch (error) {
        //     console.error("Error firing employee:", error);
        // }
        console.log(id)
    };

    const handleOpenSalaryModal = (employee) => {
        setSelectedEmployee(employee);
        setNewSalary(employee.salary);
        setIsModalOpen(true);
    };

    const handleUpdateSalary = async () => {
        try {
            await secureAxios.patch(`/admin/update-salary/${selectedEmployee._id}`, { newSalary });
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
                row.original.role !== 'HR' && (
                    <button
                        className=" px-2 py-2 rounded"
                        onClick={() => handleMakeHR(row.original._id)}
                    >
                        {row.original._id && '[ ]'}
                    </button>
                ) ||  <GrStatusGood  className=" text-black text-2xl"/>
        },
        {
            accessorKey: 'fire',
            header: 'Fire',
            cell: ({ row }) => (
                <button

                    onClick={() => handleFire(row.original._id)}
                >
                    {row.original.isFired ? 'fired' : <FaFire className="text-red-500 text-2xl" />}
                </button>
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

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-bold mb-6 text-center">All Employee List</h3>
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
