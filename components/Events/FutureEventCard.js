
// import Link from 'next/link';
import React from 'react';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

const FutureEventCard = ({ futureEvent }) => {

    return (
        <div
            className="rounded-lg bg-opacity-40 bg-red-800  "
        >

            <h3 className="pt-10 text-white text-xl font-bold text-center">ПРЕДСТОЯЩО СЪБИТИЕ</h3>

            <h3 className="pt-6 text-white text-lg text-center">{futureEvent.time}</h3>

            <h3 className="pt-6 text-white text-lg text-center">{futureEvent.location}</h3>

            <h3 className="pt-6  text-white text-lg text-center">{futureEvent.title}</h3>

            <div className="p-4">

                <Zoom>
                    <img alt="gallery" className=" block object-cover w-full  object-center  rounded-lg"
                        src={futureEvent.image} />
                </Zoom>
            </div>

        </div>
    )
}

export default FutureEventCard;