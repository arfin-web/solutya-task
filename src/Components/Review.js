import React from 'react'
import reviewImg from '../images/review.png'

function Review() {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto bg-indigo-200 rounded-lg">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap px-20">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-42 object-cover object-center rounded-full" src={reviewImg} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-16">
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <h1 className="text-gray-900 text-md title-font font-medium mt-6 mb-1">Tom Cooper</h1>
                            <h2 className="text-md title-font text-orange-500 tracking-widest">Managing Director or Art</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review