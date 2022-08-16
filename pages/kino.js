import React from 'react'
import PagesLayout from '../components/PagesLayout';
import 'react-medium-image-zoom/dist/styles.css';
import ImageGallery from '../components/ImageGallery';
import { categoryImages, categoryVideos } from '../constants';
import Meta from '../components/Meta';
import VideoGallery from '../components/VideoGallery';


const Gallery = () => {
    return (

        <PagesLayout>
            
            <Meta title={"пътуващо кино"} description={"пътуващо кино, най-новите тематично подбрани филми"} />

            <div className="px-4 pb-12 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-2xl   sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    ПЪТУВАЩО КИНО
                </h1>
            </div>
            <div>
                <p className="text-xl sm:text-2xl text-white mb-6">
                    Нашият проект „Пътуващо кино“ стартира през 2008 г. и е първото пътуващо кино в България след 1990 г.
                    Главната ни цел е да популяризираме българското кино, за да могат българските филми да достигнат до хората,
                    за които са предназначени – българските зрители, независимо в коя точка от страната живеят.
                </p>
                <br />
                <p className="text-xl sm:text-2xl text-white mb-6">
                    За 13 години работа по проект “Пътуващо кино” сме реализирали  над 900 кинопрожекции пред над 1 млн.
                    зрители. Благодарение подкрепата на много общини в страната, фирми и организации.
                    Нашите прожекции са с “ВХОД СВОБОДЕН” -  на това се дължи голяма част от успеха ни.
                    На първо място обаче е факта, че показваме най-новите, тематично подбрани филми.
                </p>
            </div>
            <div className="py-14">
                <ImageGallery images={categoryImages["kino"]} />
            </div>

            {/* <VideoGallery videos={categoryVideos["kino"]} /> */}

        </PagesLayout >
    );
}

export default Gallery;
