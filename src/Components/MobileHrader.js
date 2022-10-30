import React, { useState } from 'react'
import logo from '../images/logo.png';

function MobileHrader() {
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <nav className="w-full bg-gray-800 shadow mobile-header">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <img alt="feature" className="object-cover object-center" src={logo} />
                                <span className="ml-3 text-orange-400 text-3xl">Doctor Guide</span>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a className="mr-5 text-white flex">HOME
                                        <span className='mt-1 ml-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a className="mr-5 text-white flex">FEATURES
                                        <span className='mt-1 ml-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a className="mr-5 text-white flex">DEPARTMENT
                                        <span className='mt-1 ml-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a className="mr-5 text-white flex">EVENT
                                        <span className='mt-1 ml-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <a className="mr-5 text-white flex">CONTACT
                                        <span className='mt-1 ml-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                                        </span>
                                    </a>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 mr-2.5">LOGIN</button>
                                    <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">SIGNUP</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MobileHrader