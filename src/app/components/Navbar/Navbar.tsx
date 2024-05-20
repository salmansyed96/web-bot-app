import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-green-700 py-4 text-left'>
  <img src='logo.png' alt='Logo' className='h-8 w-auto inline-block' />
  <span className='text-white ml-2 text-xl font-bold'>WhatsBot</span>
  
  <img src='profile_icon.png' alt='Profile' className='h-8 w-auto inline-block float-right mr-4' />
</div>

  )
}

export default NavBar
