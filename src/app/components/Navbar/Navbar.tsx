"use client";

// const NavBar: React.FC = () => {
//   const handleLogout = () => {
//     // Implement logout logic here
//     // For example, clearing session/local storage, redirecting, etc.
//     console.log('Logged out');
//   };

//   return (
//     <div className='bg-green-700 py-4 flex justify-between items-center'>
//       <div className='flex items-center'>
//         {/* <img src='logo.png' alt='Logo' className='h-8 w-auto inline-block' /> */}
//         <span className='text-white ml-2 text-4xl'>WhatsBot</span>
//       </div>
//       <button
//         className='text-white mr-4 py-1 px-3 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none'
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//       {/* <img src='profile_icon.png' alt='Profile' className='h-8 w-auto inline-block' /> */}
//     </div>
//   );
// };

// export default NavBar;



import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    // Implement logout logic here
    // For example, clearing session/local storage, redirecting, etc.
    localStorage.clear();
    console.log('Logged out');
     // add routing
     router.push('/LoginPage');

    // After logout logic, you can redirect to login page or perform other actions
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-green-700 py-4 flex justify-between items-center'>
      <div className='flex items-center'>
        {/* <img src='logo.png' alt='Logo' className='h-8 w-auto inline-block' /> */}
        <span className='text-white ml-2 text-4xl'>WhatsBot</span>
      </div>
      <div className='relative'>
        <button
          className='text-white py-1 px-3 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
          onClick={toggleDropdown}
        >
          <img
            src='/profile_icon.png'
            alt='Profile'
            className='h-8 w-auto rounded-full'
          />
        </button>
        {isOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
            <button 
              className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;




