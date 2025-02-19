import React from "react";

const AboutUs = () => {
  const roles = [
    {
      role: "CEO",
      image: "https://i.ibb.co.com/6XFDk6y/majidul.png",
    },
    {
      role: "CTO",
      image: "https://i.ibb.co.com/vDG0t8q/bg-image.png",
    },
    {
      role: "HR Manager",
      image: "https://i.ibb.co.com/vDG0t8q/bg-image.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10 pt-28">
      {/* Company Overview */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">About Our Company</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We are a leading company dedicated to managing employee workflows, payroll, and HR operations efficiently.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Our Mission", desc: "To simplify and streamline employee management processes through innovative technology." },
          { title: "Our Vision", desc: "To become the go-to solution for businesses looking to enhance workforce efficiency." }
        ].map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-100 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-500">{item.title}</h2>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-bold text-blue-600 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {["Integrity", "Innovation", "Transparency", "Collaboration", "Customer Focus", "Excellence"].map((value, index) => (
            <div 
              key={index} 
              className="p-4 bg-gray-200 rounded-lg text-center font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section>
        <h2 className="text-3xl font-bold text-blue-600 text-center">Our Journey</h2>
        <p className="mt-4 text-gray-600 text-center">
          Started in 2022, our company has grown from a small team to a leading platform trusted by businesses worldwide.
        </p>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold text-blue-600 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
        {roles.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto hover:bg-blue-400 transition duration-300">
                <img src={item.image} alt="" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{item.role}</h3>
              <p className="text-gray-600">Expert in managing {item.role.toLowerCase()} operations.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
