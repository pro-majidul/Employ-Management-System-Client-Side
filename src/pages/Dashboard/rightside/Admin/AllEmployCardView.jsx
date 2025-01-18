import { GrDocumentUpdate, GrStatusGood } from 'react-icons/gr';
// import UseEmployee from '../../../../hooks/UseEmployee';
import { FaFire } from 'react-icons/fa';

const AllEmployCardView = ({employees,handleOpenSalaryModal,handleFire,handleMakeHR}) => {
    // const [employees, refetch] = UseEmployee()
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {employees.map((employee) => (
                    <div
                        key={employee._id}
                        className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200"
                    >
                        <div className="mb-4">
                            <h4 className="text-lg font-bold">{employee.name}</h4>
                            <p className="text-sm text-gray-600">{employee.email}</p>
                            <p className="text-sm text-gray-600">Designation: {employee.designation}</p>
                            <p className="text-sm text-gray-600">Salary: ${employee.salary}</p>
                            <p className="text-sm text-gray-600">Bank Account: {employee.bankAccountNo}</p>
                        </div>

                        <div className="flex  items-center justify-between mt-4">
                            {/* Promote to HR */}
                            {employee.role !== "HR" ? (
                                <button
                                    onClick={() => handleMakeHR(employee._id)}
                                    className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                                >
                                    Make HR
                                </button>
                            ) : (
                                <GrStatusGood className="text-green-500 text-xl" />
                            )}

                            {/* Fire Employee */}
                            {!employee.isFired ? (
                                <button
                                    onClick={() => handleFire(employee._id)}
                                    className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-lg"
                                >
                                    <FaFire />
                                </button>
                            ) : (
                                <span className="text-red-600 font-bold">Fired</span>
                            )}

                            {/* Update Salary */}
                            <button
                                onClick={() => handleOpenSalaryModal(employee)}
                                className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg"
                            >
                                <GrDocumentUpdate />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default AllEmployCardView;