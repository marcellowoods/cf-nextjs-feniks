import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Courasel = ({ images }) => {

    // console.log(images);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image, index) => {
                    return (

                        <SwiperSlide key={index}>
                            <div className="relative overflow-hidden pb-12/12 lg:pb-5/12 ">
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
                        </SwiperSlide>

                    )

                })}

                {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default Courasel;
