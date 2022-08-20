import React from 'react'
import PagesLayout from '../components/PagesLayout';

// import Lasers from '../components/Effects/Lasers/Lasers';
//for newline add whitespace-pre-line and use inside text {"\n"} 

const Contacts = () => {
    return (

        <div className="relative h-full overflow-hidden z-0 min-h-screen">
            {/* <Lasers /> */}

            <PagesLayout>

                <div>

                    <div className="text-xl sm:text-2xl text-center lh-6 ld-04  text-white mb-6">
                        <div className="max-w-xl mx-auto px-2 sm:px-6 text-center">
                            <div className="py-0 sm:py-12   ">
                                <h1 className="mb-5 text-2xl sm:text-6xl font-bold text-white">
                                    За връзки с нас
                                </h1>
                                {/* bg-opacity-70 bg-black */}
                                <div className="bg-opacity-70 bg-black whitespace-pre rounded-lg py-8">
                                    <h1 className="mb-2 text-base sm:text-2xl font-semibold text-white">
                                        088 771 3207  -  Тихомир Горанов
                                    </h1>
                                    <h1 className="mb-9 text-base sm:text-2xl font-semibold text-white">
                                        088 668 3789  -  Агнес Първанова
                                    </h1>

                                    <h1 className="mb-9 text-base sm:text-2xl font-semibold text-white">
                                        email  -  pk_feniks@abv.bg
                                    </h1>

                                    <a className="mb-9 underline text-base sm:text-2xl font-semibold text-white" target="_blank" href="https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D1%86%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B0-%D0%BA%D1%8A%D1%89%D0%B0-%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81-1994175757577191/">
                                        facebook
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </PagesLayout>
        </div>
    );
}

export default Contacts;
