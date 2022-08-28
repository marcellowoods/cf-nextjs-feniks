import React, { useState } from 'react';
import CouraselVideo from './BottomCouraselVideo';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';


/**
 * @param {Object} params
 * @param {Message} params.message
 */

const MainMessage = ({ message, isActive }) => {

    const { text, image, video } = message;

    const renderVideo = () => {

        if (video) {
            return (
                <div className="p-2">

                    <CouraselVideo
                        isActive={isActive}
                        videoUrl={video}
                    />

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

                        <div className="relative overflow-hidden pb-12/12 md:pb-6/12 ">
                            <img alt="gallery"
                                className="absolute h-full w-full object-cover"
                                src={image}
                            />
                            {/* <Image
                                    alt="gallery"
                                    priority={true}
                                    className="absolute h-full w-full object-cover"
                                    layout='fill'
                                    objectFit='cover'
                                    src={image}
                                /> */}
                            {/* <CustomImage key={image} imageSrc={image} /> */}
                        </div>
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

