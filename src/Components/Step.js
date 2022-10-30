import React from 'react'
import stepimg from '../images/stepimg.png'
import StepData from '../Database/StepData'
import StepIcon from '../images/step.png'

function Step() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={stepimg} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Sick Kid? HowTo Deal With a
                            <br className="hidden lg:inline-block" />Child's Fever: 4 Steps
                        </h1>
                        {
                            StepData.map(step => {
                                console.log(step);
                                return (
                                    <div className="flex mb-10 lg:items-start items-center mt-8" key={step.id}>
                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-white mb-5">
                                            <img alt="feature" className="object-cover object-center h-full w-full" src={StepIcon} />
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-800 text-2xl title-font font-medium mt-1.5 ml-8">{step.text}</h2>
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

export default Step