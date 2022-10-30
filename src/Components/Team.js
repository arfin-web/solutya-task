import React from 'react'
import TeamData from '../Database/TeamData'
import expert from '../images/expert.png'

function Team() {
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
                            TeamData.map(member => {
                                return (
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" key={member.id}>
                                            <img className="lg:h-64 md:h-48 w-full object-cover object-center" src={expert} alt="blog" />
                                            <div className="p-6">
                                                <h1 className="title-font text-3xl font-medium text-gray-900 mb-1">{member.memberName}</h1>
                                                <h1 className="title-font text-2xl text-gray-700 mb-3">{member.qualification}</h1>
                                                <div className="flex flex-col items-end">
                                                    <p className="leading-relaxed">{member.description}</p>
                                                    <button className="text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none rounded-md text-md">Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team