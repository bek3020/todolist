import React from 'react';
    import Header_logo from '../assets/img/header_logo.png';

    const Header = ({dark , setDark}) => {

    return (
        <header className= {`py-6 shadow-md transition-colors duration-300 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-[1200px] w-full mx-auto px-4">
            <div className="flex items-center justify-between">
                <div className="logo">
                            <a href="/">
                            <img src={Header_logo} alt="logo" className={dark ? 'filter brightness-0 invert' : ''} />
                            </a>
                </div>
                <nav className="flex-1 ml-10">
    <div className={`flex items-center space-x-8 font-medium ${dark ? 'text-gray-300' : 'text-gray-800'}`}>
                    <a href="#" className={`hover:text-blue-400 transition-colors`}>
                    Categories
                    </a>

                    <div className="relative group cursor-pointer">
                    <span className={`flex items-center hover:text-blue-400 transition-colors`}>
                        About Us
                        <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-40">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                        Our Story
                        </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                        Team
                        </a>
                    </div>
                    </div>

                    <div className="relative group cursor-pointer">
                    <span className={`flex items-center hover:text-blue-400 transition-colors`}>
                        Help center
                        <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                                    <div className={`absolute left-0 top-full hidden group-hover:block shadow-md rounded-md mt-2 w-44 ${dark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'}`}>
                                                            <a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                        FAQ
                        </a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors">
                        Contact Us
                        </a>
                    </div>
                    </div>
                </div>
                </nav>
                <div className="flex items-center gap-6">
                <a href="tel:+18554200000" className={`hover:text-blue-400 transition-colors ${dark ? 'text-gray-300' : 'text-gray-800'}`}>
                    +1 855 420 0000
                </a>
                <button onClick={() => setDark(!dark)} className="text-2xl bg-amber-400 rounded-[50%]  hover:bg-gray-200 p-2 transition-all duration-300">
                    {dark ? (
                    <i className='fa-solid fa-sun'></i>
                    ) : (
                    <i className="fa-solid fa-moon"></i>
                    )}
                </button>
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-all duration-300">
                    Login
                    <i className="fa-solid fa-right-to-bracket"></i>
                </button>
                </div>
            </div>
            </div>
        </header>
    );
    };

    export default Header;
