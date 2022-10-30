import React from 'react'
import ScheduleData from '../Database/ScheduleData'
import ScheduleImg from '../images/schedule.png'

function Schedule() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h1 className="title-font text-3xl mb-4 font-bold text-gray-900">Doctor's Schedule Today</h1>
                        {
                            ScheduleData.map(Schedules => {
                                return (
                                    <>
                                        <div className="flex mb-10 lg:items-start items-center mt-8" key={Schedules.id}>
                                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-orange-500 text-4xl mb-5">{Schedules.time}</div>
                                            <div className="flex-grow">
                                                <h2 className="text-gray-900 text-lg title-font font-medium mt-1.5 ml-20">{Schedules.designation}</h2>
                                                <h4 className="text-gray-500 text-md title-font font-medium ml-20">{Schedules.doctorName}</h4>
                                            </div>
                                        </div>
                                        <hr className='mb-8 w-9/12' />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={ScheduleImg} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Schedule