import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="bg-red-500  p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        Hoonar
        
      </div>

      {/* Search Bar */}
      <div className="bg-red-300 w-64 flex justify-between px-2 py-2 rounded-full gap-x-2 ">
      <div className="flex justify-center pl-1 ">
        <input className='bg-inherit'
          type="text"
          placeholder="Search"
        
        />
       </div>
       <div className="bg-red-300 text-white opacity-70 rounded-full justify-center py-1"><FaCircleArrowRight /></div>
      </div>

      {/* Login Button */}
      <button className="bg-violet-500 opacity-50 w-24 h-9 hover:bg-red-500 px-4 py-1 rounded-full justify-center text-white ">
        Log in
      </button>
    </nav>
  );
}

export default Navbar;
