import React from 'react'
import ImageGallery from '../components/ImageGallery';
import { categoryImages, categoryVideos } from '../constants';
import VideoGallery from '../components/VideoGallery';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CategoryPageContacts = ({ hasPadding }) => {

    return (
        <div
            className={classNames("max-w-2xl mx-auto", hasPadding ? "p-16 sm:p-32 " : "pt-12 pb-6")}
        >

            <h3 className="pt-2 pb-2 text-white text-lg font-bold text-center">Свържете се с нас</h3>

            <h1 className="pb-2 text-center text-base sm:text-lg font-semibold text-white whitespace-pre">
                088 771 3207  -  Тихомир Горанов
            </h1>
            <h1 className="pb-2 text-center text-base sm:text-lg font-semibold text-white whitespace-pre">
                088 668 3789  -  Агнес Първанова
            </h1>

        </div>
    )
}

const CategoryMedia = ({ category }) => {

    const hasAnyMedia = (categoryVideos[category] && categoryVideos[category].length) || categoryImages[category] && categoryImages[category].length;

    return (
        <div>

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
            <CategoryPageContacts
                hasPadding={hasAnyMedia ? false : true}
            />
        </div>
    )
}

export default CategoryMedia;