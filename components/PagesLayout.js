
import React from 'react';

//https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom

const PagesLayout = ({ children }) => {

    return (
        <div className={` min-h-screen pages-gradient pages-gradient`}>
            <div className="px-4 lg:px-0 pb-14 text-gray-600 body-font max-w-4xl pt-20 sm:pt-20 mx-auto">

                {children}
            </div>
        </div>
    )
}

export default PagesLayout;

