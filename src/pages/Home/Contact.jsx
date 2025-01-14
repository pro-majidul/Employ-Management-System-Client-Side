import { useState } from 'react';
import { FaClock, FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    return (
        <div
            style={{
                backgroundImage: "url('https://i.ibb.co.com/dbBvzjq/vintage-grunge-blue-concrete-tex.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className="max-w-7xl mx-auto w-full pt-10" >
                <main className="container mx-auto pt-28 px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="space-y-8">
                            <div className=" rounded-lg overflow-hidden">
                                <div className="py-6 space-y-4">
                                    <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                                    <p className="mb-4 text-white">
                                        Feel free to reach out to us for any questions or support related
                                        to employee management.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex hover:shadow-md bg-gray-200 px-4 rounded-xl py-4 items-center space-x-3 text-gray-700">
                                            <FaPhone size={25} />
                                            <a className='text-lg'>+88 01746637704</a>
                                        </div>
                                        <div className="flex hover:shadow-md bg-gray-200 px-4 rounded-xl py-4 items-center space-x-3 text-gray-700">
                                            <FaMailBulk size={25} />
                                            <a className='text-lg'>majidul123tub@gmail.com</a>
                                        </div>
                                        <div className="flex hover:shadow-md bg-gray-200 px-4 rounded-xl py-4 items-center space-x-3 text-gray-700">
                                            <FaMapPin size={25} />
                                            <a className='text-lg'>123 Business Ave, Suite 100, City, State 12345</a>
                                        </div>
                                        <div className="flex hover:shadow-md  bg-gray-200 px-4 rounded-xl py-4 items-center space-x-3 text-gray-700">
                                            <FaClock size={25} />
                                            <a className='text-lg'>Monday - Friday: 9:00 AM - 5:00 PM</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 shadow-lg rounded-lg overflow-hidden">
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a message</h2>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your message here..."
                                        rows={4}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='mt-5 pt-5'>
                        <div className="w-full max-h-[400px] md:h-[500px]">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: '0' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396613.642486573!2d-100.7159912158745!3d39.04851334987619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1736889661887!5m2!1sen!2sbd"
                                allowFullScreen
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Contact;
