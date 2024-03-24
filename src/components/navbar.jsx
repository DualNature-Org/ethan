import React, { useState } from 'react';
import Logo from '../images/logo.jpg'; 
import { ImCross } from 'react-icons/im';
import { SlOptions } from "react-icons/sl";
import { Link } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      {/* Navbar for larger devices */}
      <nav className='hidden sm:flex justify-between bg-white text-slate-500 ' style={{backgroundColor: '#2f2fa7', padding: '.6rem', borderBottom: 'solid .5px white', boxShadow: '10px 5px 5px red;'}}>
        <Link to="/">
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="logo" className='w-16 h-16 md:w-25 md:h-25 rounded-full' />
            <h1 className='text-2xl md:text-2xl font-bold font-mono' style={{marginLeft: '.6rem', fontFamily: 'none', color:'antiquewhite', fontSize: '1.8rem'}}>Ethan School</h1>
          </div>
        </Link>
        <ul className="flex justify-center items-center space-x-8">
          <li className='text-xl md:text-2xl font-bold font-mono text-slate-500 cursor-pointer hover:text-[#0B3F67]'>
            <Link to="/aboutus" style={{color: 'gold'}}>About</Link>
          </li>
          <li className='text-xl md:text-2xl font-bold font-mono text-slate-500 cursor-pointer hover:text-[#0B3F67]'>
            <Link to="/blog" style={{color: 'gold'}}>Blog</Link>
          </li>
          <li className='text-xl md:text-2xl font-bold font-mono text-slate-500 cursor-pointer hover:text-[#0B3F67]'>
            <Link to="/parents" style={{color: 'gold'}}>Parents</Link>
          </li>
          <li className='text-xl md:text-2xl font-bold font-mono text-slate-500 cursor-pointer hover:text-[#0B3F67]'>
            <Link to='/curriculam' style={{color: 'gold'}}>Curriculum</Link>
            </li>
          <li className='text-xl md:text-2xl font-bold font-mono text-slate-500 cursor-pointer hover:text-[#0B3F67]'>
            <Link to="/admission" style={{color: 'gold'}}>Admission</Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for smaller devices */}
      <nav className='sm:hidden flex justify-between items-center bg-[#2f2fa7] text-white py-2 px-2'>
        <a href="/">
          <div className='flex justify-center items-center mr-3'>
            <img src={Logo} alt="logo" className='w-20 h-20 md:w-32 md:h-32 rounded-full' />
            <h1 className='text-3xl ml-2 md:text-4xl font-bold font-mono'>Ethan School</h1>
          </div>
        </a>
        <div>
          <button onClick={() => setShowLinks(!showLinks)} className="p-4 focus:outline-none hover:text-blue-500">
            {showLinks ? <ImCross className="text-4xl" /> : <SlOptions className="text-4xl" />}
          </button>
        </div>
      </nav>

      {/* Overlay for smaller devices when Navbar is open */}
      {showLinks && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-50">
          <ImCross className="text-white text-3xl cursor-pointer mb-[6rem] border border-slate-400 rounded-full" onClick={() => setShowLinks(false)} />
          <ul className="text-white text-3xl flex flex-col justify-between space-y-10 ">
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500'>
              <Link to="/aboutus" onClick={() => setShowLinks(false)}>About</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500'>
              <Link to="/blog" onClick={() => setShowLinks(false)}>Blog</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500'>
            <Link to="/parents"onClick={() => setShowLinks(false)}>Parents</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500'>
            <Link to='/curriculam' onClick={() => setShowLinks(false)}>Curriculam</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500'>
              <Link to="/admission" onClick={() => setShowLinks(false)}>Admission</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
