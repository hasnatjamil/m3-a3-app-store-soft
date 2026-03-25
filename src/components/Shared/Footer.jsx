import logo from '../../assets/logo.png';

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>


                <footer className="footer flex  flex-col md:flex-row justify-between items-center  text-neutral-content pt-6">

                    {/* footer logo text */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                        <span className="text-2xl font-bold bg-gradient">
                            HERO.IO
                        </span>
                    </div>

                    {/* footer social link */}
                    <div className="flex flex-col md:flex-col items-center gap-3 mt-4 md:mt-0">
                        <h2 className="text-lg font-semibold">Social Links</h2>
                        <div className="flex gap-2 text-2xl">
                            <a href="#" className='bg-white rounded-full p-1 text-black'><FaXTwitter /></a>
                            <a href="#" className='bg-white rounded-full p-1 text-black'><FaLinkedinIn /></a>
                            <a href="#" className='bg-white rounded-full p-1 text-black'><FaFacebookF /></a>
                        </div>
                    </div>
                </footer>


                <hr className='border-gray-500' />


                {/* Bottom footer with copyright */}
                <footer className="footer footer-center  text-base-content p-6">

                    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>

                </footer>
            </div>
        </div>
    );
};

export default Footer;
