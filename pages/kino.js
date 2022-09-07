import React from 'react'
import PagesLayout from '../components/PagesLayout';
import ImageGallery from '../components/ImageGallery';
import { categoryImages, categoryVideos } from '../constants';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';
// import VideoGallery from '../components/VideoGallery';


const Kino = () => {
    return (

        <PagesLayout>

            <Meta title={"Пътуващо кино - Филмови прожекции на открито"} description={"Кинопрожекции на открито на най-новите тематично подбрани филми"} />

            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 text-white body-font mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    ПЪТУВАЩО КИНО
                </h1>

                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    ФИЛМОВИ ПРОЖЕКЦИИ НА ОТКРИТО
                </h1>


            </div>
            <div>
                <p className="text-base sm:text-lg text-white">
                    Нашият проект „Пътуващо кино“ стартира през 2008 г. и е първото пътуващо кино в България след 1990 г.
                    Главната ни цел е да популяризираме българското кино, за да могат българските филми да достигнат до хората,
                    за които са предназначени – българските зрители, независимо в коя точка от страната живеят.
                </p>
                <br />
                <p className="text-base sm:text-lg text-white mb-6">
                    За 13 години работа по проект “Пътуващо кино” сме реализирали над 900 кинопрожекции пред над 1 млн.
                    зрители. Благодарение подкрепата на много общини в страната, фирми и организации.
                    Нашите прожекции са с “ВХОД СВОБОДЕН” -  на това се дължи голяма част от успеха ни.
                    На първо място обаче е факта, че показваме най-новите тематично подбрани филми.
                </p>
            </div>

            <CategoryMedia category={"kino"} />

            {/* <VideoGallery videos={categoryVideos["kino"]} /> */}

        </PagesLayout >
    );
}

export default Kino;
