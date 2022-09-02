import React from 'react'
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const Meropriyatiya = () => {
    return (
        <PagesLayout>

            <Meta title={"Организиране на мероприятия"} description={"Организиране на събития - фирмени партита, dj партита, семинари, презентации на открито, презентации на закрито"} />
            
            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 body-font mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    ОРГАНИЗИРАНЕ НА МЕРОПРИЯТИЯ
                </h1>
            </div>
            <div>
                <p className="text-base sm:text-lg text-white mb-6">
                    Организираме различни мероприятия – фирмени партита, dj партита, семинари, презентации на открито и закрито.
                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Можем да поканим за вашето парти български изпълнител от който да си изберете жанр и атрактивен водещ.
                    Можем да снимаме вашето парти и всичко случващо се да тече на екран – този подход създава забавни и весели моменти.
                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Ако вие сами сте организирали събитието си, но се нуждаете от техническа подкрепа, осигуряваме на изгодни цени мултимедиийни проектори, екрани, лазери и озвучителна техника със съотвения оператор.
                </p>
            </div>

            <CategoryMedia category={"meropriyatiya"} />

        </PagesLayout>
    );
}

export default Meropriyatiya;
