import React from 'react'
import ImageGallery from '../components/ImageGallery';
import { categoryImages, categoryVideos } from '../constants';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import VideoGallery from '../components/VideoGallery';


const LazernoShow = () => {
    return (
        <PagesLayout>
            <Meta title={"лазерно шоу"} description={"лазерно шоу, светлинно шоу"} />
            <div>
                <div className="px-4 pb-10 sm:pt-4 sm:pb-20 text-gray-600 body-font max-w-5xl mx-auto">
                    <h1 className="text-lg sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                        {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                        ЛАЗЕРНО ШОУ
                    </h1>
                </div>
                <p className="text-base sm:text-2xl text-white mb-6">
                    Лазерното шоу е много ефектно синхронизиране на звук и светлина.
                    Представлявa спектакъл с визуални светлинни внушения което разчупва визията на мероприятието.

                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Лазерното шоу може да съпътства всякакви сценични изяви.
                    Подходящо е за откриване и закриване на празници, концерти, фестивали и др.

                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Ние сме единствения екип в страната, който прави лазерно шоу под съпровода на българска музика.
                </p>
            </div>

            {categoryVideos["lazeri"] && (
                <VideoGallery videos={categoryVideos["lazeri"]} />
            )}

            {categoryImages["lazeri"] && (
                <div className="pt-2">
                    <ImageGallery images={categoryImages["lazeri"]} />
                </div>
            )}




        </PagesLayout>
    );
}

export default LazernoShow;
