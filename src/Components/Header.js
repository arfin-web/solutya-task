import React from 'react'
import logo from '../images/logo.png';

function Header() {
    return (
        <>
            <header className="text-gray-600 body-font bg-gray-800 desktop-header">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img alt="feature" className="object-cover object-center" src={logo} />
                        <span className="ml-3 text-orange-400 text-3xl">Doctor Guide</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 text-white flex">HOME
                            <span className='mt-1 ml-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                            </span>
                        </a>
                        <a className="mr-5 text-white flex">FEATURES
                            <span className='mt-1 ml-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                            </span>
                        </a>
                        <a className="mr-5 text-white flex">DEPARTMENT
                            <span className='mt-1 ml-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                            </span>
                        </a>
                        <a className="mr-5 text-white flex">EVENT
                            <span className='mt-1 ml-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                            </span>
                        </a>
                        <a className="mr-5 text-white flex">CONTACT
                            <span className='mt-1 ml-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" /> </svg>
                            </span>
                        </a>
                    </nav>
                    <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 mr-2.5">LOGIN</button>
                    <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">SIGNUP</button>
                </div>
            </header>
        </>
    )
}

export default Header