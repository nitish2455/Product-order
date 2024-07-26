import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-900 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo */}
                            <a href="#" className="flex items-center py-4 px-2">
                               
                                <span className="font-semibold text-white text-lg">Navbar</span>
                            </a>
                        </div>
                    </div>
                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-4 px-2 text-white border-b-4 border-rose-200 font-semibold">Home</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-rose-200 transition duration-300">About</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-rose-200 transition duration-300">Services</a>
                        <a href="#" className="py-4 px-2 text-white font-semibold hover:text-rose-200 transition duration-300">Contact</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <ul className="">
                    <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Services</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
