import React, { useState, useEffect } from 'react';
import Logo from "../images/logo.jpg";
import { Link } from 'react-router-dom';
import { CiFacebook, CiHome, CiInstagram, CiPhone, CiTwitter, CiYoutube } from "react-icons/ci";
import {FaRegArrowAltCircleUp} from "react-icons/fa";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 300) { // Adjust this value as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-cover bg-gray-200 flex foot flex-col">
            <div className='container mx-auto py-8 px-4'>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
                    <img src={Logo} alt="logo" className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-8 md:mb-0' />
                    <h1 style={{ fontSize: '2rem', fontWeight: '600'}} className='md:mt-10 xl:m-2'>Ethan School</h1>
                    <div className='grid grid-cols-2 mb-8 md:grid-cols-3 gap-4 md:gap-8 md:mb-10 justify-center md:flex flex-col mt-10 lg:mb-0 md:items-center md:mr-[4rem] md:flex-row md:justify-evenly md:ml-auto lg:mr-[7rem]'>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-xl mb-4  font-semibold cursor-pointer hover:text-[#0B3F67]'><Link to='/gallery'>Gallery</Link></h1>
                            <h1 className='text-xl mb-4  font-semibold cursor-pointer hover:text-[#0B3F67]'><Link to='/philosophy'>Philosophy</Link></h1>
                            <h1 className='text-xl mb-4 font-semibold  md:hidden'>Policy</h1>

                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-xl mb-4  font-semibold cursor-pointer hover:text-[#0B3F67]'><Link to='/faq'>FAQ</Link></h1>
                            <h1 className='text-xl mb-4 font-semibold  hover:text-[#0B3F67] md:hidden'><Link to="/aboutus">About us</Link></h1>
                            <h1 className='text-xl mb-4  font-semibold cursor-pointer hover:text-[#0B3F67]'><Link to="/faculty">Faculty</Link></h1>
                        </div>
                        <div className='hidden md:visible md:flex justify-center items-center flex-col'>
                            <h1 className='text-xl mb-4 font-semibold '>Policy</h1>
                            <h1 className='text-xl mb-4 font-semibold  hover:text-[#0B3F67]'><Link to="/aboutus">About us</Link></h1>
                        </div>
                    </div>

                    <div className='md:ml-12'>
                        <h1 className='text-2xl font-semibold mb-4 text-[#0B3F67] md:text-3xl'>Contact us</h1>
                        <p className='text-xl font-medium flex items-center mb-4'><CiPhone className='w-6 h-6 mr-2' />+91-9610002304</p>
                        <p className='text-xl font-medium flex items-center mb-4'><CiHome className='w-6 h-6 mr-2' /> Ward no 5, Jeet nagar, Jhunjhunu</p>
                        <div className='flex justify-start items-center flex-wrap'>
                            <CiFacebook className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-[#0B3F67] text-white mr-4 hover:animate-bounce' />
                            <CiYoutube className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-[#0B3F67] text-white mr-4 hover:animate-bounce' />
                            <CiInstagram className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-[#0B3F67] text-white hover:animate-bounce' />
                            <CiTwitter className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-[#0B3F67] text-white ml-4 hover:animate-bounce' />
                        </div>
                    </div>
                </div>
            </div>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-3 bg-[#0B3F67] text-white rounded-full shadow-md hover:bg-[#DEB525] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <FaRegArrowAltCircleUp className='w-8 h-8' />
                </button>
            )}

            <p className='text-xm  text-left m-2 pl-2'> © 2024 <a href="https://dualnature.xyz/">DualNature</a> - All Rights Reserved</p>
        </div>
    );
}

export default Footer;
