import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from 'react';
import MainMessage from "./MainMessage";
import { messages } from '../constants';

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

// https://stackoverflow.com/questions/39159236/my-swiper-with-swiper-js-stop-autoplay-after-slide-it-with-finger-why
const MessageCourasel = () => {

    return (
        <>
            <div className="overflow-hidden relative ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {messages.map((message, index) => {

                        return (

                            <SwiperSlide key={index}>
                                <MainMessage message={message} />
                            </SwiperSlide>

                        )

                    })}

                    {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>

            </div>

        </>
    );
}

export default MessageCourasel;