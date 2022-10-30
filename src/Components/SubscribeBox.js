import React from 'react'
import subscribeimg from '../images/subscribe.png'

function SubscribeBox() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center rounded-lg">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={subscribeimg} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg-sky-600 rounded-lg h-5/6 pt-24 pb-40 mt-32">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Subscribe Now</h1>
                        <p className="mb-8 leading-relaxed text-white">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>

                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                            </div>
                            <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                            <div className="absolute top-2 right-2">

                                <button className="h-10 w-20 text-white rounded-lg bg-orange-500 hover:bg-orange-600">Search</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubscribeBox