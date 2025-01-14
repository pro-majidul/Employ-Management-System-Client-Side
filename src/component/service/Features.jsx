
const Features = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="max-w-7xl w-full mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Empower your team and streamline operations with our advanced tools.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 hover:border-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white dark:bg-gray-800  shadow-lg rounded-lg p-6 text-center  hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                            <i className="fas fa-tasks"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Workflow Tracking
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Monitor and manage employee tasks, deadlines, and productivity in one place.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-green-600 dark:text-green-400 mb-4">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Salary Management
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Automate payrolls and keep accurate records of salary payments effortlessly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-red-600 dark:text-red-400 mb-4">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Role-Based Access
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Securely assign roles like Admin, HR, or Employee for better data management.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-yellow-500 dark:text-yellow-400 mb-4">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Performance Analytics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Gain insights into employee performance with detailed reports and analytics.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-purple-600 dark:text-purple-400 mb-4">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Secure Authentication
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Ensure data privacy with email and social login options for all users.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-[0_10px_25px_-5px_rgba(255,165,0,0.6)]">
                        <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
                            <i className="fas fa-bullhorn"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                            Real-Time Notifications
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Stay updated with workflow changes through instant notifications.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;