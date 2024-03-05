import React from 'react'
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as User } from "../icons/user.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../features/sidebar/sidebarSlice';

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='header flex justify-between py-4 px-6 border-b border'>
      <div className='header-left flex w-40 items-center'>
        <div className='header__menu-icon mr-4 cursor-pointer' onClick={toggleMenuHandler}>
          <Menu />
        </div>
        <div className='header__logo'>
          <Logo />
        </div>
      </div>
      <div className='header-center w-3/6'>
        <div className="relative rounded-md shadow-sm">
          <input type="text" name="price" id="price" className="border border-gray-400 rounded-3xl px-4 py-2.5 text-sm w-full placeholder:text-gray-400 focus:outline-none focus:border-gray-400" placeholder="Search" />
          <div className="absolute inset-y-0 right-0 flex items-cente bg-slate-50 border cursor-pointer border-gray-400 rounded-r-full w-20 justify-center items-center">
            <Search />
          </div>
        </div>
      </div>
      <div className='header-right w-40 flex justify-end items-center'>
        <User />
      </div>
    </div>
  )
}

export default Header
