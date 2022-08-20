import React from 'react'
import { allVideos } from '../constants';
import VideoGallery from '../components/VideoGallery';
import PagesLayout from '../components/PagesLayout';

const VideoGalleryPage = () => {
    return (
        <PagesLayout>

            <div className="px-4 pb-12 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-xl sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    ГАЛЕРИЯ - ВИДЕО
                </h1>
            </div>

            <VideoGallery videos={allVideos} />


        </PagesLayout>

    );
}

export default VideoGalleryPage;
