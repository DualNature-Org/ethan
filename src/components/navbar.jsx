import React, { useState } from 'react';
import Logo from '../images/logo.jpg'; 
import {Link} from 'react-router-dom';
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <nav className='flex justify-between '>
        <a href="/">
        <div className='flex   justify-center items-center ml-6 '>
          <img src={Logo} alt="logo" className=' w-[4rem] h-[4rem] md:w-[9rem] md:h-[9rem] rounded-full' />
          <h1 className='text-xl md:text-3xl font-bold font-mono text-slate-500'>Ethan School</h1>
        </div>
        </a>
        <div className="sm:hidden">
          <button onClick={() => setShowLinks(!showLinks)}>
            <svg className="w-6 h-6 mt-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`flex ${showLinks ? 'flex-col' : 'hidden'} sm:flex sm:justify-center sm:items-center sm:flex-wrap`}>
        <li className='text-2xl m-3  font-bold font-mono text-slate-500 cursor-pointer hover:text-blue-500'><Link to="/aboutus">aboutus</Link></li>
          <li className='text-2xl m-3  font-bold font-mono text-slate-500 cursor-pointer hover:text-blue-500'><Link to="/blog">blog</Link></li>
          <li className='text-2xl m-3  font-bold font-mono text-slate-500 cursor-pointer hover:text-blue-500'>courses</li>
          <li className='text-2xl m-3  font-bold font-mono text-slate-500 cursor-pointer hover:text-blue-500'> <Link to="/admission">admission</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;