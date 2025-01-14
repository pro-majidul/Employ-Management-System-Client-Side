import { FaHandshake, FaRegLightbulb } from 'react-icons/fa';

const OurPartner = () => {
    return (
    <section
    style={{
        backgroundImage: "url('https://i.ibb.co.com/jk08wzb/image-1.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
    
    }}
    className=" py-16 text-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
      <h2 className="text-4xl font-bold text-black mb-8">Our Strategic Partners</h2>
      <p className="text-lg text-black mb-12">
        We collaborate with visionary companies to drive innovation and deliver exceptional solutions to our clients.
      </p>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Partner 1 */}
        <div className="group relative flex justify-center items-center bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700">
          <img
            className="w-full object-contain group-hover:scale-75 transition-all duration-300 ease-in-out"
            src="https://i.ibb.co.com/wR1h8qZ/smiling-confident-business-lady-1.jpg"
            alt="Partner 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-xl font-semibold text-white">Innovative Solutions</p>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="group relative flex justify-center items-center bg-white  rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700">
          <img
            className=" w-full object-contain group-hover:scale-75 transition-all duration-300 ease-in-out"
            src="https://i.ibb.co.com/tLCM8bF/asian-man-saying-good-job-1.jpg"
            alt="Partner 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-xl font-semibold text-white">Driven by Excellence</p>
          </div>
        </div>

        {/* Partner 3 */}
        <div className="group relative flex justify-center items-center bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700">
          <img
            className="w-full object-contain group-hover:scale-75 transition-all duration-300 ease-in-out"
            src="https://i.ibb.co.com/sJb1hZk/cheerful-attractive-businesswoma.jpg"
            alt="Partner 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-xl font-semibold text-white">Building Tomorrow</p>
          </div>
        </div>

        {/* Partner 4 */}
        <div className="group relative flex justify-center items-center bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700">
          <img
            className="w-full object-contain group-hover:scale-75 transition-all duration-300 ease-in-out"
            src="https://i.ibb.co.com/C7wPhLj/confident-aged-businessman-1.jpg"
            alt="Partner 4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-xl font-semibold text-white">Leading the Change</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 space-y-6">
        <p className="text-xl font-medium text-orange-500">Become a part of our future innovations.</p>
        <div className="md:flex justify-center space-y-3 space-x-8">
          <div className="flex items-center mt-3 space-x-3 bg-gradient-to-r from-green-500 to-green-700 cursor-pointer text-white px-6 py-3 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <FaHandshake className="h-5 w-5" />
            <span className="text-xl font-semibold">Join Our Network</span>
          </div>
          <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-500 to-yellow-700 cursor-pointer text-white px-6 py-3 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <FaRegLightbulb className="h-5 w-5" />
            <span className="text-xl font-semibold">Innovate with Us</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default OurPartner;