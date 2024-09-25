import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-800 p-3 flex items-center justify-around'>
         <h1 className='text-white text-center font-semibold text-3xl'>Expense Tracker</h1>
           {/* <Link  className='text-blue-500'>Navbar</Link> */}
           <Login/>
        
    </div>
  );
}

export default Navbar;
