import React from 'react'
import ServiceData from '../Database/ServiceData'
import Servie1 from '../images/service1.png'

function Service() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-6xl font-extrabold title-font mb-4 text-gray-900">Our Medical Care</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-base">Whatever cardigan tote bag</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {
              ServiceData.map(services => {
                return (
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center" src={Servie1} />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-white bg-indigo-800 py-3">{services.serviceName}</h2>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none rounded-md text-lg">LOAD MORE DEPARTMENTS</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service