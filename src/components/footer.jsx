import React from 'react';
import Logo from "../images/logo.jpg";
import { CiFacebook, CiGps, CiHome, CiInstagram, CiPhone, CiTwitter } from "react-icons/ci";

function Footer() {
    return (
        <div className="bg-gray-200 flex flex-col">
            <div className='container mx-auto py-8 px-4'>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
                    <img src={Logo} alt="logo" className='w-24 h-24 md:w-32 md:h-32 rounded-full mb-8 md:mb-0' />
                    <div className=' mb-10 md:flex flex-col mt-10 mb-0 md:items-center md:ml-auto'>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-xl font-medium mb-4'>Policy</h1>
                            <h1 className='text-xl font-medium mb-4 hover:text-blue-700'><a href="/aboutus"> About us</a></h1>
                        </div>
                        <div className='flex justify-center items-center'>
                            <CiFacebook className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-blue-700 text-white mr-4 hover:animate-bounce' />
                            <CiInstagram className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-blue-700 text-white hover:animate-bounce' />
                            <CiTwitter className='w-12 h-12 md:w-[3rem] md:h-[3rem] p-1 rounded-full bg-blue-700 text-white ml-4 hover:animate-bounce' />
                        </div>
                    </div>
                    <div className='md:ml-12'>
                        <h1 className='text-3xl font-semibold mb-4 text-blue-700'>Contact us</h1>
                        <p className='text-xl font-medium flex items-center mb-4'><CiPhone className='w-6 h-6 mr-2' /> 9610002304</p>
                        <p className='text-xl font-medium flex items-center mb-4'><CiHome className='w-6 h-6 mr-2' /> Ward no 5, Jeet nagar, Jhunjhunu</p>
                    </div>
                </div>
            </div>
            <p className='text-xl text-center m-2'>© Copyright | Lorem, ipsum dolor. School</p>
        </div>
    );
}

export default Footer;
