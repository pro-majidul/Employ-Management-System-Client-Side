import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useSecureAxios from '../../../../hooks/useSecureAxios';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Form, Input, Modal } from 'antd';

const PayRole = () => {
    const SecureAxios = useSecureAxios();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState('')
    // Pagination state
    const [pageIndex, setPageIndex] = useState(0); // Current page index
    const [pageSize, setPageSize] = useState(10); // Items per page

    // Fetch payment data with pagination
    const { data: paymentData = { data: [], totalPages: 1 }, refetch } = useQuery({
        queryKey: ['payrole', pageIndex, pageSize],
        queryFn: async () => {
            const res = await SecureAxios.get('/payrole', {
                params: { page: pageIndex, limit: pageSize },
            });
            return res.data;
        },
        keepPreviousData: true, // Keep previous data while fetching new
    });

    const handlePay = async (id) => {
        setIsModalOpen(true);
        setPaymentInfo(id)
        console.log(id)
    };

    const columns = [
        {
            accessorKey: 'name',
            header: 'Employee Name',
        },
        {
            accessorKey: 'salary',
            header: 'Salary',
        },
        {
            accessorKey: 'monthYear',
            header: 'Month & Year',
            cell: ({ row }) => `${row.original.month}, ${row.original.year}`,
        },
        {
            accessorKey: 'paymentDate',
            header: 'Payment Date',
            cell: ({ row }) => row.original.paymentDate || '',
        },
        {
            accessorKey: 'pay',
            header: 'Pay',
            cell: ({ row }) => (
                <button
                    className={`px-4 py-2 rounded ${row.original.isPaid
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                    disabled={row.original.isPaid}
                    onClick={() => handlePay(row.original)}
                >
                    {row.original.isPaid ? 'Paid' : 'Pay'}
                </button>
            ),
        },
    ];

    const table = useReactTable({
        data: paymentData.data || [], // Use paginated data
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            pagination: { pageIndex, pageSize },
        },
        manualPagination: true, // Handle pagination manually
        pageCount: paymentData.totalPages, // Total pages from API
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Employee Payment Requests</h1>
            <div className="overflow-x-auto mb-4">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="border border-gray-300 px-4 py-2">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="border border-gray-300 px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                    onClick={() => setPageIndex((old) => Math.max(0, old - 1))}
                    disabled={pageIndex === 0}
                >
                    Previous
                </button>
                <span>
                    Page {pageIndex + 1} of {paymentData.totalPages}
                </span>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                    onClick={() => setPageIndex((old) => old + 1)}
                    disabled={pageIndex + 1 >= paymentData.totalPages}
                >
                    Next
                </button>
            </div>

            <Modal
                title={`Total Salary ${paymentInfo.salary}`}
                open={isModalOpen}
                // onOk={handleUpdateSalary}
                onCancel={() => setIsModalOpen(false)}
                className="responsive-modal"
            >
                <Form>
                    <Form.Item label="New Salary">
                        <Input
                            type="number"
                            // value={newSalary}
                            onChange={(e) => setNewSalary(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default PayRole;
