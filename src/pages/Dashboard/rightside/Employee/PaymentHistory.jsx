import React, { useState } from 'react';
import useAuth from '../../../../hooks/UseAuth';
import useSecureAxios from '../../../../hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const secureAxios = useSecureAxios();
    const [page, setPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages

    const { data: historyData = {}, isLoading } = useQuery({
        queryKey: ['history', user?.email, page],
        queryFn: async () => {
            const res = await secureAxios.get(`/payment-history/${user?.email}?page=${page}&limit=5`);
            setTotalPages(res.data.pagination.pages); // Set total pages for pagination
            return res.data;
        },
    });
    console.log(historyData)
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Payment History</h2>

            {/* Loading Spinner */}
            {isLoading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Month, Year</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.result && historyData.result.length > 0 ? (
                                    historyData.result.map((payment) => (
                                        <tr key={payment._id} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-2">
                                                {`${payment.month}, ${payment?.year}`}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">${payment?.salary}</td>
                                            <td className="border border-gray-300 px-4 py-2">{payment?.data?.transaction}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center border border-gray-300 px-4 py-2">
                                            No payment history found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            className={`px-4 py-2 text-sm bg-blue-500 text-white rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-600">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            className={`px-4 py-2 text-sm bg-blue-500 text-white rounded ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PaymentHistory;
