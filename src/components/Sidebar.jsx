import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  // Early return 
  if (!isMenuOpen) return null;

  return (
    <div className='sidebar w-60 p-4 overflow-auto'>
      <ul>
        <li className='bg-gray-100 px-4 py-2 text-black font-medium rounded-md mb-1'>Home</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Subscriptions</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Shorts</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>YouTube Music</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Your Channel</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Your Videos</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Watch Later</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Explore</li>
        <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 rounded-md mb-1'>Settings</li>
      </ul>
    </div>
  )
}

export default Sidebar
