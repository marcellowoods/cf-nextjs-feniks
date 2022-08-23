import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { messages } from '../constants';
import Link from 'next/link';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import VideoGallery from './VideoGallery';
import ImageGallery from './ImageGallery';

/**
 * @param {Object} params
 * @param {Message} params.message
 */
const MainMessage = () => {

    const message = messages[0];
    const { text, images, videos } = message;

    const renderVideos = () => {

        if (videos && videos.length) {
            return (
                <div className="p-2">

                    <VideoGallery videos={videos} />
                </div>
            )
        }
        return <></>
    }

    const renderImages = () => {

        if (images && images.length) {

            return (
                <div className="p-2">

                    <ImageGallery images={images} />

                </div>
            )

        }

        return <></>
    }

    return (
        <div
            className="rounded-lg bg-opacity-40 message-background-color "
        >
            <div className="pt-12 px-12 pb-6">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center">{text}</h3>
            </div>

            {renderVideos()}

            {renderImages()}

            <div className="">
                <Link href={"/events"}>
                    <h3 className="text-white py-2 -mt-4 pb-4 text-lg sm:text-xl font-bold underline cursor-pointer text-center">разгледайте събитията организирани от нас</h3>
                </Link>
            </div>




            {/* <h3 className="pt-6 text-white text-lg text-center">{futureEvent.time}</h3>

            <h3 className="pt-6 text-white text-lg text-center">{futureEvent.location}</h3>

            <h3 className="pt-6  text-white text-lg text-center">{futureEvent.title}</h3> */}

        </div>
    )
}

export default MainMessage;

