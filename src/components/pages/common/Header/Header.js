import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import logo from '../../../../assets/img/singlespacelogo.jpg'

const Header = ({ pageName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <div className={pageName !== 'home' ? 'sticky top-0 z-50' : 'fixed top-0 z-50 w-full'}>
            <nav className={pageName !== 'home' ? "text-black bg-white py-6" : (scrolled ? "text-black bg-white py-6" : "text-white bg-transparent py-6")}>
                <div className="w-full mx-auto px-8 lg:px-24">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex items-center">
                            <img className='object-cover h-10 w-10 mr-3' src={logo} alt="logo" />
                            <h1 className='font-bold text-2xl'>SINGLESPACE</h1>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden lg:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink
                                        to="/home"
                                        className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </NavLink >

                                    <NavLink
                                        to="/projects"
                                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projects
                                    </NavLink>

                                    <NavLink
                                        to="/about"
                                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex items-center text-lg my-2'>
                                <a href="https://www.facebook.com/prosenjit.chowdhury.988" target='_blank'> <FaFacebookF className='mr-4  font-bold' /></a>
                                <a href="https://twitter.com/home" target='_blank'><FaTwitter className='mr-4  font-bold' /></a>
                                <a href="https://www.linkedin.com/in/prosenjit-chowdhury-4968b1195/" target='_blank'><FaLinkedinIn className='mr-4  font-bold' /></a>

                                <div className='flex items-center'>
                                    <FaPhoneAlt className='mr-4  font-bold' />
                                    +8801789146828
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to="/home"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="/projects"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </NavLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>

    );
};

export default Header;