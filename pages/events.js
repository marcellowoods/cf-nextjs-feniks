import React, { useState } from 'react';
import PagesLayout from '../components/PagesLayout';

import FutureEventCard from '../components/Events/FutureEventCard';
import PastEventCard from '../components/Events/PastEventCard';
import pastEvents from "../db/events/past/allEvents";
import futureEvents from "../db/events/future/allEvents";


const Events = () => {

    const LOAD_PER_CLICK = 2;

    const [postNum, setPostNum] = useState(LOAD_PER_CLICK); // Default number of posts dislplayed

    function handleClick() {
        setPostNum(prevPostNum => prevPostNum + LOAD_PER_CLICK) // 3 is the number of posts you want to load per click
    }

    return (

        // https://tailwindcss.com/docs/min-height
        // min-h-screen	


        <PagesLayout>

            {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
            {/* <Header name={globalData.name} /> */}

            <div className="px-4 pb-14 sm:pb-20 sm:pt-4 sm:pb-16 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-2xl   sm:text-4xl text-center  lh-6 ld-04 font-bold text-white">
                    СЪБИТИЯ
                </h1>
            </div>

            <div className="pb-16 sm:pt-4">

                {futureEvents.length ? (
                    <div className="pt-4 pb-16 space-y-12 max-w-2xl mx-auto">
                        {futureEvents.map((futureEvent, index) => (
                            <FutureEventCard
                                key={index}
                                futureEvent={futureEvent}
                            />

                        ))}
                    </div>
                ) : (
                    <></>
                )
                }

                <div className="space-y-12 max-w-2xl mx-auto">

                    {pastEvents.slice(0, postNum).map((post, index) => (
                        <PastEventCard
                            key={index}
                            pastEvent={post}
                        />

                    ))}

                    {postNum < pastEvents.length &&
                        (
                            <div className="flex flex-col items-center">
                                <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-500 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={handleClick}>покажи още</button>
                            </div>
                        )
                    }

                    {postNum >= pastEvents.length &&
                        (


                            <div className="bg-opacity-30 bg-black rounded-lg py-8 max-w-xl mx-auto px-2 sm:px-6 text-center">
                                <h1 className="text-lg sm:text-2xl font-semibold text-gray-200">
                                    Вижте още събития
                                </h1>
                                <a className="mb-9 underline text-lg sm:text-2xl font-semibold text-gray-200" target="_blank" href="https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D1%86%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B0-%D0%BA%D1%8A%D1%89%D0%B0-%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81-1994175757577191/">
                                    на facebook страницата ни
                                </a>
                            </div>
                        )
                    }


                </div>


            </div>

        </PagesLayout>

    );
}

export default Events;