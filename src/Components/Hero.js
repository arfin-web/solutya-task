import React from 'react'
import hero from '../images/hero.png'

function Hero() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto px-4 flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Find The Care
                            <br className="hidden lg:inline-block" />You Need
                        </h1>
                        <p className="mb-8 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none rounded-md text-lg">Make Appointment</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero