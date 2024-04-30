import React, { useState } from 'react';
import Logo from '../assets/Jt.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="backdrop-blur-xl shadow-lg shadow-cyan-500/50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          <a href="#" className="text-2xl font-sans font-bold text-white flex items-center hover:text-cyan-500">
            <img src={Logo} alt="" className='w-16'/>JustMyTickets
          </a>
        </div>
        <nav className={`${showMenu ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Plays
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Activities
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Buzz
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <div className="nav-icons hidden md:flex">
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fas fa-search"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fas fa-user"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fas fa-ticket-alt"></i>
            </a>
          </div>
          <div className="menu-toggle md:hidden">
            <button
              className="text-white hover:text-gray-400 focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;