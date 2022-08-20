import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import ImageGallery from '../components/ImageGallery';
import { categoryImages } from '../constants';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const Gallery = () => {
    return (
        <PagesLayout>

            <Meta title={"организиране на мероприятия - партита, семинари, презентации"} description={"Организиране на различни мероприятия – фирмени партита, DJ-партита, семинари, презентации на открито и закрито"} />
            <div className="px-4 pb-12 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-xl sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    ОРГАНИЗИРАНЕ НА МЕРОПРИЯТИЯ
                </h1>
            </div>
            <div>
                <p className="text-base sm:text-2xl text-white mb-6">
                    Организираме различни мероприятия – фирмени партита, DJ-партита, семинари, презентации на открито и закрито.
                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Можем да поканим за вашето парти български изпълнител от който да си изберете жанр и атрактивен водещ.
                    Можем да снимаме вашето парти и всичко случващо се да тече на екран – този подход създава забавни и весели моменти.
                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Ако вие сами сте организирали събитието си, но се нуждаете от техническа подкрепа, осигуряваме на изгодни цени мултимедиийни проектори, екрани, лазери и озвучителна техника със съотвения оператор.
                </p>
            </div>
            {/* <div className="py-14">
                <ImageGallery images={categoryImages["lazeri"]} />
            </div> */}
        </PagesLayout>
    );
}

export default Gallery;
