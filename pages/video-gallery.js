import React from 'react'
import { allVideos } from '../constants';
import VideoGallery from '../components/VideoGallery';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';

const VideoGalleryPage = () => {
    return (
        <PagesLayout>

            <Meta title={"Видео галерия"} description={"Видео клипове на събитията организирани от нас"} />

            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    ВИДЕО ГАЛЕРИЯ
                </h1>
            </div>

            <div className="-mx-2 sm:mx-0">
                <VideoGallery videos={allVideos} />
            </div>


        </PagesLayout>

    );
}

export default VideoGalleryPage;
