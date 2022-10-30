import React from 'react'

function Events() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How to lead a good healthy life</h1>
                        <div className='flex justify-between items-center mb-10'>
                            <div className='flex justify-between items-center'>
                                <svg className='text-orange-500' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8121 2H14.8121V1C14.8121 0.734784 14.7068 0.48043 14.5192 0.292893C14.3317 0.105357 14.0774 0 13.8121 0C13.5469 0 13.2926 0.105357 13.105 0.292893C12.9175 0.48043 12.8121 0.734784 12.8121 1V2H6.81213V1C6.81213 0.734784 6.70678 0.48043 6.51924 0.292893C6.3317 0.105357 6.07735 0 5.81213 0C5.54692 0 5.29256 0.105357 5.10503 0.292893C4.91749 0.48043 4.81213 0.734784 4.81213 1V2H3.81213C3.01648 2 2.25342 2.31607 1.69081 2.87868C1.1282 3.44129 0.812134 4.20435 0.812134 5V17C0.812134 17.7956 1.1282 18.5587 1.69081 19.1213C2.25342 19.6839 3.01648 20 3.81213 20H15.8121C16.6078 20 17.3708 19.6839 17.9335 19.1213C18.4961 18.5587 18.8121 17.7956 18.8121 17V5C18.8121 4.20435 18.4961 3.44129 17.9335 2.87868C17.3708 2.31607 16.6078 2 15.8121 2ZM3.81213 4H4.81213V5C4.81213 5.26522 4.91749 5.51957 5.10503 5.70711C5.29256 5.89464 5.54692 6 5.81213 6C6.07735 6 6.3317 5.89464 6.51924 5.70711C6.70678 5.51957 6.81213 5.26522 6.81213 5V4H12.8121V5C12.8121 5.26522 12.9175 5.51957 13.105 5.70711C13.2926 5.89464 13.5469 6 13.8121 6C14.0774 6 14.3317 5.89464 14.5192 5.70711C14.7068 5.51957 14.8121 5.26522 14.8121 5V4H15.8121C16.0774 4 16.3317 4.10536 16.5192 4.29289C16.7068 4.48043 16.8121 4.73478 16.8121 5V9H2.81213V5C2.81213 4.73478 2.91749 4.48043 3.10503 4.29289C3.29256 4.10536 3.54692 4 3.81213 4ZM15.8121 18H3.81213C3.54692 18 3.29256 17.8946 3.10503 17.7071C2.91749 17.5196 2.81213 17.2652 2.81213 17V11H16.8121V17C16.8121 17.2652 16.7068 17.5196 16.5192 17.7071C16.3317 17.8946 16.0774 18 15.8121 18Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>15 Oct, 2019</p>
                            </div>
                            <div className='flex justify-between items-center ml-16'>
                                <svg className='text-orange-500' width="19" height="20" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.81213 4H2.81213V1C2.81213 0.734784 2.70678 0.48043 2.51924 0.292893C2.3317 0.105357 2.07735 0 1.81213 0C1.54692 0 1.29256 0.105357 1.10503 0.292893C0.917491 0.48043 0.812134 0.734784 0.812134 1V5C0.812134 5.26522 0.917491 5.51957 1.10503 5.70711C1.29256 5.89464 1.54692 6 1.81213 6H5.81213C6.07735 6 6.33171 5.89464 6.51924 5.70711C6.70678 5.51957 6.81213 5.26522 6.81213 5C6.81213 4.73478 6.70678 4.48043 6.51924 4.29289C6.33171 4.10536 6.07735 4 5.81213 4Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>8:00 AM - 5:00 PM</p>
                            </div>
                            <div className='flex justify-between items-center ml-16'>
                                <svg className='text-orange-500' width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.81213 1.00146e-08C6.70419 -0.00010539 4.68139 0.831759 3.18338 2.31479C1.68536 3.79782 0.833213 5.81216 0.812134 7.92C0.812134 13.4 7.86213 19.5 8.16213 19.76C8.34327 19.9149 8.57378 20.0001 8.81213 20.0001C9.05049 20.0001 9.281 19.9149 9.46213 19.76C9.81213 19.5 16.8121 13.4 16.8121 7.92C16.7911 5.81216 15.9389 3.79782 14.4409 2.31479C12.9429 0.831759 10.9201 -0.00010539 8.81213 1.00146e-08ZM8.81213 17.65C7.14213 16.06 2.81213 11.65 2.81213 7.92C2.81213 6.3287 3.44427 4.80258 4.56949 3.67736C5.69471 2.55214 7.22083 1.92 8.81213 1.92C10.4034 1.92 11.9296 2.55214 13.0548 3.67736C14.18 4.80258 14.8121 6.3287 14.8121 7.92C14.8121 11.62 10.4821 16.06 8.81213 17.65Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>Uttara, TX 70240</p>
                            </div>
                        </div>
                        <p className="mb-8 leading-relaxed">Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none rounded-md text-lg">Book Now</button>
                            <button className="bg-transparent hover:bg-blue text-orange-500 font-semibold py-2 px-4 border ml-4 border-indigo-800 hover:border-transparent rounded">10 Available</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mr-4">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How to lead a good healthy life</h1>
                        <div className='flex justify-between items-center mb-10'>
                            <div className='flex justify-between items-center'>
                                <svg className='text-orange-500' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8121 2H14.8121V1C14.8121 0.734784 14.7068 0.48043 14.5192 0.292893C14.3317 0.105357 14.0774 0 13.8121 0C13.5469 0 13.2926 0.105357 13.105 0.292893C12.9175 0.48043 12.8121 0.734784 12.8121 1V2H6.81213V1C6.81213 0.734784 6.70678 0.48043 6.51924 0.292893C6.3317 0.105357 6.07735 0 5.81213 0C5.54692 0 5.29256 0.105357 5.10503 0.292893C4.91749 0.48043 4.81213 0.734784 4.81213 1V2H3.81213C3.01648 2 2.25342 2.31607 1.69081 2.87868C1.1282 3.44129 0.812134 4.20435 0.812134 5V17C0.812134 17.7956 1.1282 18.5587 1.69081 19.1213C2.25342 19.6839 3.01648 20 3.81213 20H15.8121C16.6078 20 17.3708 19.6839 17.9335 19.1213C18.4961 18.5587 18.8121 17.7956 18.8121 17V5C18.8121 4.20435 18.4961 3.44129 17.9335 2.87868C17.3708 2.31607 16.6078 2 15.8121 2ZM3.81213 4H4.81213V5C4.81213 5.26522 4.91749 5.51957 5.10503 5.70711C5.29256 5.89464 5.54692 6 5.81213 6C6.07735 6 6.3317 5.89464 6.51924 5.70711C6.70678 5.51957 6.81213 5.26522 6.81213 5V4H12.8121V5C12.8121 5.26522 12.9175 5.51957 13.105 5.70711C13.2926 5.89464 13.5469 6 13.8121 6C14.0774 6 14.3317 5.89464 14.5192 5.70711C14.7068 5.51957 14.8121 5.26522 14.8121 5V4H15.8121C16.0774 4 16.3317 4.10536 16.5192 4.29289C16.7068 4.48043 16.8121 4.73478 16.8121 5V9H2.81213V5C2.81213 4.73478 2.91749 4.48043 3.10503 4.29289C3.29256 4.10536 3.54692 4 3.81213 4ZM15.8121 18H3.81213C3.54692 18 3.29256 17.8946 3.10503 17.7071C2.91749 17.5196 2.81213 17.2652 2.81213 17V11H16.8121V17C16.8121 17.2652 16.7068 17.5196 16.5192 17.7071C16.3317 17.8946 16.0774 18 15.8121 18Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>15 Oct, 2019</p>
                            </div>
                            <div className='flex justify-between items-center ml-16'>
                                <svg className='text-orange-500' width="19" height="20" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.81213 4H2.81213V1C2.81213 0.734784 2.70678 0.48043 2.51924 0.292893C2.3317 0.105357 2.07735 0 1.81213 0C1.54692 0 1.29256 0.105357 1.10503 0.292893C0.917491 0.48043 0.812134 0.734784 0.812134 1V5C0.812134 5.26522 0.917491 5.51957 1.10503 5.70711C1.29256 5.89464 1.54692 6 1.81213 6H5.81213C6.07735 6 6.33171 5.89464 6.51924 5.70711C6.70678 5.51957 6.81213 5.26522 6.81213 5C6.81213 4.73478 6.70678 4.48043 6.51924 4.29289C6.33171 4.10536 6.07735 4 5.81213 4Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>8:00 AM - 5:00 PM</p>
                            </div>
                            <div className='flex justify-between items-center ml-16'>
                                <svg className='text-orange-500' width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.81213 1.00146e-08C6.70419 -0.00010539 4.68139 0.831759 3.18338 2.31479C1.68536 3.79782 0.833213 5.81216 0.812134 7.92C0.812134 13.4 7.86213 19.5 8.16213 19.76C8.34327 19.9149 8.57378 20.0001 8.81213 20.0001C9.05049 20.0001 9.281 19.9149 9.46213 19.76C9.81213 19.5 16.8121 13.4 16.8121 7.92C16.7911 5.81216 15.9389 3.79782 14.4409 2.31479C12.9429 0.831759 10.9201 -0.00010539 8.81213 1.00146e-08ZM8.81213 17.65C7.14213 16.06 2.81213 11.65 2.81213 7.92C2.81213 6.3287 3.44427 4.80258 4.56949 3.67736C5.69471 2.55214 7.22083 1.92 8.81213 1.92C10.4034 1.92 11.9296 2.55214 13.0548 3.67736C14.18 4.80258 14.8121 6.3287 14.8121 7.92C14.8121 11.62 10.4821 16.06 8.81213 17.65Z" fill="#FF8B42" />
                                </svg>
                                <p className='text-sm ml-4'>Uttara, TX 70240</p>
                            </div>
                        </div>
                        <p className="mb-8 leading-relaxed">Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none rounded-md text-lg">Book Now</button>
                            <button className="bg-transparent hover:bg-blue text-orange-500 font-semibold py-2 px-4 border ml-4 border-indigo-800 hover:border-transparent rounded">20 Available</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events