import React, { useState } from 'react';
import CouraselVideo from './CouraselVideo';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';


/**
 * @param {Object} params
 * @param {Message} params.message
 */

const MainMessage = ({ message }) => {

    const { text, image, video } = message;

    const renderVideo = () => {

        if (video) {
            return (
                <div className="p-2">

                    <CouraselVideo videoUrl={video} />

                </div>
            )
        }
        return <></>
    }

    const renderImage = () => {

        if (image) {

            return (
                <div className="p-2">

                    <Zoom>
                        <img alt="gallery" className="block object-cover w-full object-center rounded-lg"
                            src={image} />
                    </Zoom>

                </div>
            )

        }

        return <></>
    }

    return (
        <div
            className="rounded-lg bg-opacity-40 message-background-color"
        >
            <div className="pt-6 px-6 pb-2 sm:pt-12 sm:px-12 sm:pb-8">
                <h3 className="text-white text-base sm:text-2xl font-bold text-center">{text}</h3>
            </div>

            {renderVideo()}

            {renderImage()}


            {/* <h3 className="pt-6 text-white text-lg text-center">{futureEvent.time}</h3>

            <h3 className="pt-6 text-white text-lg text-center">{futureEvent.location}</h3>

            <h3 className="pt-6  text-white text-lg text-center">{futureEvent.title}</h3> */}

        </div>
    )
}

export default MainMessage;

