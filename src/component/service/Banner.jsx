
const Banner = () => {
    return (
        <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 text-white py-28">
            <div className="max-w-7xl w-full mx-auto px-6  flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Streamline Your Employee Management
                    </h1>
                    <p className="text-lg lg:text-xl mb-8">
                        Monitor workload, manage salaries, track contracts, and ensure a seamless workflow for your team with our intuitive platform.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Right Side: Image */}
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <img
                        src="https://i.ibb.co.com/sKRt26t/business-person-looking-finance.jpg"
                        alt="Employee Management Banner"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        </section>
    );
};

export default Banner;