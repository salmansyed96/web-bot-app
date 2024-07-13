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



// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const NavBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const handleLogout = () => {
//     // Implement logout logic here
//     // For example, clearing session/local storage, redirecting, etc.
//     localStorage.clear();
//     console.log('Logged out');
//      // add routing
//      router.push('/LoginPage');

//     // After logout logic, you can redirect to login page or perform other actions
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='bg-green-700 py-4 flex justify-between items-center'>
//       <div className='flex items-center'>
//         {/* <img src='logo.png' alt='Logo' className='h-8 w-auto inline-block' /> */}
//         <span className='text-white ml-2 text-4xl'>WhatsBot</span>
//       </div>
//       <div className='relative'>
//         <button
//           className='text-white py-1 px-3 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
//           onClick={toggleDropdown}
//         >
//           <img
//             src='/profile_icon.png'
//             alt='Profile'
//             className='h-8 w-auto rounded-full'
//           />
//         </button>
//         {isOpen && (
//           <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
//             <button 
//               className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;








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



// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const NavBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const handleLogout = () => {
//     // Implement logout logic here
//     // For example, clearing session/local storage, redirecting, etc.
//     localStorage.clear();
//     console.log('Logged out');
//      // add routing
//      router.push('/LoginPage');

//     // After logout logic, you can redirect to login page or perform other actions
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='bg-green-700 py-4 flex justify-between items-center'>
//       <div className='flex items-center'>
//         {/* <img src='logo.png' alt='Logo' className='h-8 w-auto inline-block' /> */}
//         <span className='text-white ml-2 text-4xl'>WhatsBot</span>
//       </div>
//       <div className='relative'>
//         <button
//           className='text-white py-1 px-3 mr-5 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
//           onClick={toggleDropdown}
//         >
//           <img
//             src='icons/profile.png'
//             alt='Profile'
//             className='h-8 w-auto rounded-full'
//           />
//         </button>
//         {isOpen && (
//           <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
//             <div className='flex items-center px-4 py-2'>
//               <img
//                 src='/icons/Profile-2.png'
//                 alt='Profile'
//                 className='h-10 w-10 rounded-full'
//               />
//               <div className='ml-3'>
//                 <p className='text-sm font-medium text-gray-900'>John Deo</p>
//                 <p className='text-xs text-gray-500'>Admin</p>
//               </div>
//             </div>
//             <div className='border-t border-gray-100'></div>
//             <button
//               className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
//             >
//               <img
//                 src='/icons/myProfile.png'
//                 alt='My Profile'
//                 className='h-5 w-5 mr-2'
//               />
//               My Profile
//             </button>
//             <button
//               className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
//             >
//               <img
//                 src='/icons/help.png'
//                 alt='Help'
//                 className='h-5 w-5 mr-2'
//               />
//               Help
//             </button>
//             <button
//               onClick={handleLogout}
//               className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
//             >
//               <img
//                 src='/icons/signOut.png'
//                 alt='Sign Out'
//                 className='h-5 w-5 mr-2'
//               />
//               Sign Out
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;

















// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const NavBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Check if we're on the login page
//       if (router.pathname === '/LoginPage') {
//         setShowProfile(false);
//       } else {
//         setShowProfile(true);
//       }
//     }
//   }, [router.pathname]);

//   const handleLogout = () => {
//     localStorage.clear();
//     console.log('Logged out');
//     router.push('/LoginPage');
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className='bg-green-700 py-4 flex justify-between items-center'>
//       <div className='flex items-center'>
//         <span className='text-white ml-2 text-4xl'>WhatsBot</span>
//       </div>
//       {showProfile && (
//         <div
//           className='relative'
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button
//             className='text-white py-1 px-3 mr-5 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
//             onClick={toggleDropdown}
//           >
//             <img
//               src='icons/profile.png'
//               alt='Profile'
//               className='h-8 w-auto rounded-full'
//             />
//           </button>
//           {isOpen && (
//             <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
//               <div className='flex items-center px-4 py-2'>
//                 <img
//                   src='/icons/Profile-2.png'
//                   alt='Profile'
//                   className='h-10 w-10 rounded-full'
//                 />
//                 <div className='ml-3'>
//                   <p className='text-sm font-medium text-gray-900'>John Deo</p>
//                   <p className='text-xs text-gray-500'>Admin</p>
//                 </div>
//               </div>
//               <div className='border-t border-gray-100'></div>
//               <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
//                 <img
//                   src='/icons/myProfile.png'
//                   alt='My Profile'
//                   className='h-5 w-5 mr-2'
//                 />
//                 My Profile
//               </button>
//               <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
//                 <img
//                   src='/icons/help.png'
//                   alt='Help'
//                   className='h-5 w-5 mr-2'
//                 />
//                 Help
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
//               >
//                 <img
//                   src='/icons/signOut.png'
//                   alt='Sign Out'
//                   className='h-5 w-5 mr-2'
//                 />
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;





// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useRouter as route } from 'next/router';

// const NavBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const getouting=route()

//   useEffect(()=>{
//     console.log(getouting.pathname)
// // Ensure this runs only on the client side
// if (typeof window !== 'undefined') {
//   // Check the current route
//   if (getouting.pathname === '/LoginPage') {
//     // setShowProfile(false);
//   } else {
//     // setShowProfile(true);
//   }
// }
//   },[])
//   const handleLogout = () => {
//     localStorage.clear();
//     console.log('Logged out');
//     router.push('/LoginPage');
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className='bg-green-700 py-4 flex justify-between items-center'>
//       <div className='flex items-center'>
//         <span className='text-white ml-2 text-4xl'>WhatsBot</span>
//       </div>
//       <div
//         className='relative'
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <button
//           className='text-white py-1 px-3 mr-5 rounded-md bg-green-700 hover:bg-green-800 focus:outline-none'
//           onClick={toggleDropdown}
//         >
//           <img
//             src='icons/profile.png'
//             alt='Profile'
//             className='h-8 w-auto rounded-full'
//           />
//         </button>
//         {isOpen && (
//           <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
//             <div className='flex items-center px-4 py-2'>
//               <img
//                 src='/icons/Profile-2.png'
//                 alt='Profile'
//                 className='h-10 w-10 rounded-full'
//               />
//               <div className='ml-3'>
//                 <p className='text-sm font-medium text-gray-900'>John Deo</p>
//                 <p className='text-xs text-gray-500'>Admin</p>
//               </div>
//             </div>
//             <div className='border-t border-gray-100'></div>
//             <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
//               <img
//                 src='/icons/myProfile.png'
//                 alt='My Profile'
//                 className='h-5 w-5 mr-2'
//               />
//               My Profile
//             </button>
//             <button className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
//               <img
//                 src='/icons/help.png'
//                 alt='Help'
//                 className='h-5 w-5 mr-2'
//               />
//               Help
//             </button>
//             <button
//               onClick={handleLogout}
//               className='flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
//             >
//               <img
//                 src='/icons/signOut.png'
//                 alt='Sign Out'
//                 className='h-5 w-5 mr-2'
//               />
//               Sign Out
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;











import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams ,useRouter} from 'next/navigation'
//import { useRouter } from 'next/router';



const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    debugger
    if (pathname === '/LoginPage' || pathname === '/') {
      setShowProfile(false)
    } else {
      setShowProfile(true);
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

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-green-700 py-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <span className='text-white ml-2 text-4xl'>WhatsBot</span>
      </div>
      {showProfile && (
        <div
          className='relative'
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
















