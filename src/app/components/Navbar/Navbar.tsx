"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(true); // New state for menu visibility
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/LoginPage' || pathname === '/') {
      setShowProfile(false);
      setShowMenu(false); // Hide menu on LoginPage
    } else {
      setShowProfile(true);
      setShowMenu(true); // Show menu on other pages
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
    console.log('Logged out');
    router.push('/LoginPage');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // For delaying the handleMouseLeave by 2 seconds, beforing setting setIsOpen to false.
  const handleMouseLeave = () => { 
    setTimeout(() => {
      setIsOpen(false);
    }, 2000)
  };

  

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className='bg-green-700 py-4 flex justify-between items-center '>
      <div className='flex items-center ml-5'>
        <span className='text-white ml-2 text-4xl'>WhatsBot</span>
      </div>

      {showMenu && ( // Conditionally render the menu
        <div className="bg-green-700 py-4 flex justify-between items-center px-6">
          <div className="flex items-center">
            {/* Add additional items here if needed */}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/Campaigns')}
              className="text-white text-lg hover:bg-green-800 py-2 px-4 rounded-md"
            >
              Campaigns
            </button>

            <button
              onClick={() => handleNavigation('/TemplateList')}
              className="text-white text-lg hover:bg-green-800 py-2 px-4 rounded-md"
            >
              Templates
            </button>
          </div>
        </div>
      )}

      {showProfile && (
        <div
          className='relative z-50'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className='text-white py-1 px-3 mr-5 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
            onClick={toggleDropdown}
          >
            <img
              src='icons/profile.png'
              alt='Profile'
              className='h-8 w-auto rounded-full'
            />
          </button>
          {isOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
              <div className='flex items-center px-4 py-2'>
                <img
                  src='/icons/Profile-2.png'
                  alt='Profile'
                  className='h-10 w-10 rounded-full'
                />
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>John Deo</p>
                  <p className='text-xs text-gray-500'>Admin</p>
                </div>
              </div>
              <div className='border-t border-gray-100'></div>
              <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                <img
                  src='/icons/myProfile.png'
                  alt='My Profile'
                  className='h-5 w-5 mr-2'
                />
                My Profile
              </button>
              <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                <img
                  src='/icons/help.png'
                  alt='Help'
                  className='h-5 w-5 mr-2'
                />
                Help
              </button>
              <button
                onClick={handleLogout}
                className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              >
                <img
                  src='/icons/signOut.png'
                  alt='Sign Out'
                  className='h-5 w-5 mr-2'
                />
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
