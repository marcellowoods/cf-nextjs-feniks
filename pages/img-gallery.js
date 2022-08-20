import React from 'react'
import { allImages } from '../constants';
import ImageGallery from '../components/ImageGallery';
import PagesLayout from '../components/PagesLayout';

const Gallery = () => {
    return (
        <PagesLayout>

            <div className="px-4 pb-10 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-lg sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    ГАЛЕРИЯ - СНИМКИ
                </h1>
            </div>

            <ImageGallery images={allImages} />


        </PagesLayout>

    );
}

export default Gallery;
