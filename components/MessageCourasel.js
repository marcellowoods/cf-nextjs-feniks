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
                    style={{ width: '100%', height: '100%' }}
                    spaceBetween={30}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 12500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay]}
                    className="swiper"
                >
                    {messages.map((message, index) => {

                        return (

                            <SwiperSlide
                                className="swiper-slide "
                                style={{ height: "auto" }}
                                key={index}
                            >
                                {({ isActive }) => (
                                    <MainMessage
                                        isActive={isActive}
                                        message={message}
                                    />
                                )}

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