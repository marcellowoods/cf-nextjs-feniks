import React from 'react'
import { allImages } from '../constants';
import ImageGallery from '../components/ImageGallery';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';

const Gallery = () => {
    return (
        <PagesLayout>

            <Meta title={"Галерия снимки"} description={"Снимки на събития организирани от нас"} />

            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    ГАЛЕРИЯ СНИМКИ
                </h1>
            </div>

            <div className="-mx-3 sm:mx-0">
                <ImageGallery images={allImages} />
            </div>


        </PagesLayout>

    );
}

export default Gallery;
