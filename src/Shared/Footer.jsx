
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img className='h-[80px] w-[80px]' src={logo} alt="" />
                        <h3 className="text-lg font-semibold text-white">Employee Management</h3>
                        <p className="text-sm">Creating beautiful experiences since 2023.</p>
                        <div className="flex space-x-4">
                            <Link className="hover:text-white"><FaFacebook size={20} /></Link>
                            <Link className="hover:text-white"><FaTwitter size={20} /></Link>
                            <Link className="hover:text-white"><FaInstagram size={20} /></Link>
                            <Link className="hover:text-white"><FaLinkedin size={20} /></Link>
                            <Link className="hover:text-white"><FaGithub size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to='/' className="hover:text-white transition-colors duration-300">Home</Link></li>
                            <li><Link to='/contactus' className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
                            <li><Link className="hover:text-white transition-colors duration-300">Services</Link></li>

                        </ul>
                    </div>

                    {/* Services */}
                    {/* <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link className="hover:text-white transition-colors duration-300">Web Design</Link></li>
                            <li><Link className="hover:text-white transition-colors duration-300">Web Development</Link></li>
                            <li><Link className="hover:text-white transition-colors duration-300">SEO Optimization</Link></li>
                            <li><Link className="hover:text-white transition-colors duration-300">Digital Marketing</Link></li>
                        </ul>
                    </div> */}

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 px-2 py-4 w-full rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-2 py-2 rounded-xl text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Employee Management. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;