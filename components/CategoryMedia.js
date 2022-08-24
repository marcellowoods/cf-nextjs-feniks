import React from 'react'
import ImageGallery from '../components/ImageGallery';
import { categoryImages, categoryVideos } from '../constants';
import VideoGallery from '../components/VideoGallery';

const CategoryMedia = ({ category }) => {

    return (
        <div>
            {categoryVideos[category] && categoryVideos[category].length ? (
                <div className="-mx-2 pb-1 sm:mx-0">
                    <VideoGallery videos={categoryVideos[category]} />
                </div>
            ) : null}


            {categoryImages[category] && categoryImages[category].length ? (
                <div className="-mx-3 sm:mx-0">
                    <ImageGallery images={categoryImages[category]} />
                </div>
            ) : null}
        </div>
    )
}

export default CategoryMedia;