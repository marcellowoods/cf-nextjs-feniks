import React, { useState } from 'react'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

// https://www.npmjs.com/package/react-medium-image-zoom
const ImageWithZoom = ({ imageUrl }) => {

    return (
        <div className="flex flex-wrap sm:w-1/3">
            <div className="w-full p-1 md:p-2">
                <Zoom>
                    {/* https://tailwindcss.com/docs/aspect-ratio */}
                    <img alt="gallery" className="block object-cover w-full aspect-video object-center  rounded-lg"
                        src={imageUrl} />

                    {/* <Image
                        className="block rounded-lg h-full w-full"
                        alt="gallery"
                        layout='fill'
                        objectFit='cover'
                        src={imageUrl} /> */}
                </Zoom>
            </div>
        </div>
    )
}

const ImageGallery = ({ images }) => {

    const LOAD_PER_CLICK = 6;

    const [imgNum, setImgNum] = useState(LOAD_PER_CLICK); // Default number of posts dislplayed

    function handleClick() {
        setImgNum(prevImgNum => prevImgNum + LOAD_PER_CLICK) // 3 is the number of posts you want to load per click
    }

    return (
        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {images.slice(0, imgNum).map((imageUrl => (
                        <ImageWithZoom key={imageUrl} imageUrl={imageUrl} />
                    )))}
                </div>
            </div>

            {imgNum < images.length &&
                (
                    <div className="flex flex-col items-center">
                        <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-500 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={handleClick}>
                            покажи още снимки
                        </button>
                    </div>
                )
            }
        </section>
    )
}

export default ImageGallery;