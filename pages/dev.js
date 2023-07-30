import React from 'react'
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const Meropriyatiya = () => {
    return (
        <PagesLayout>

            <Meta title={"Други мой сайтове"} description={"Други мой сайтове"} />

            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 body-font mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    ДРУГИ МОЙ САЙТОВЕ
                </h1>
            </div>
            <div>
                <p className="text-base sm:text-lg text-white mb-6">
                    
                    <p>
                        
                        
                        <a className="underline" href="https://rodos.bg/">гръцки ресторант Родос</a> {" "} - {" "}
                        традиционна храна от остров Родос - морски дарове, пици и още много други вкусотии

                    </p>
                </p>


            </div>

            

        </PagesLayout>
    );
}

export default Meropriyatiya;
