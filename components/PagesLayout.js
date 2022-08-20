
import React, { useState } from 'react';

//https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom

const PagesLayout = ({ children }) => {


    return (
        <div className={` min-h-screen pages-gradient pages-gradient`}>
            <div className="px-4 lg:px-0 pb-14 text-gray-600 body-font max-w-5xl pt-24 sm:pt-32 mx-auto">

                {children}
            </div>
        </div>
    )
}

export default PagesLayout;

