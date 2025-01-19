import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useSecureAxios from '../../../../hooks/useSecureAxios';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Form, Input, Modal } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { Helmet } from 'react-helmet-async';
const stripePromise = loadStripe(import.meta.env.VITE_Publisher_key)

const PayRole = () => {
    const SecureAxios = useSecureAxios();
    // Pagination state
    const [pageIndex, setPageIndex] = useState(0); // Current page index
    const [pageSize, setPageSize] = useState(10); // Items per page
    const [modalOpen, setIsModalOpen] = useState(false)
    const [paymentInfo, setPaymentInfo] = useState({})
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
        refetch()
        // console.log(id)
    };

    console.log(paymentData)

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
            cell: ({ row }) => {
                const dateString = row.original?.data?.date;
                return dateString ? new Date(dateString).toLocaleString() : '';
            }
        },
        {
            accessorKey: 'pay',
            header: 'Pay',
            cell: ({ row }) => (
                <button
                    className={`px-4 py-2 rounded ${row.original?.data?.transaction

                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                    disabled={row.original?.data?.transaction}
                    onClick={() => handlePay(row.original)}
                >
                    {row.original?.data?.transaction ? 'Paid' : 'Pay'}
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
            <Helmet>
                <title>Employee Management || Pay-Role</title>
            </Helmet>
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

            {/* Payment Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white mx-3 p-6 w-full md:max-w-md md:mx-auto rounded shadow-lg">
                        <h2 className="text-xl font-bold">Pay Employee</h2>
                        <p className="my-3 text-xl">
                            Salary: <strong>{paymentInfo.salary}</strong>
                        </p>
                        <Elements stripe={stripePromise}>
                            <CheckOutForm
                                refetch={refetch}
                                setIsModalOpen={setIsModalOpen}
                                paymentInfo={paymentInfo}
                            />
                        </Elements>

                    </div>
                </div>
            )}
        </div>
    );
};

export default PayRole;
