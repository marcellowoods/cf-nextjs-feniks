import React from 'react';
import ImageGallery from '../ImageGallery';

import VideoGallery from '../VideoGallery';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const displayData = (obj) => {

    let month = "";
    let day = obj.day;
    let year = obj.year;


    switch (obj.month) {
        case 1:
            month = "Януари"
            break;
        case 2:
            month = "Февруари"
            break;
        case 3:
            month = "Март"
            break;
        case 4:
            month = "Април"
            break;
        case 5:
            month = "Май"
            break;
        case 6:
            month = "Юни"
            break;
        case 7:
            month = "Юли"
            break;
        case 8:
            month = "Август"
            break;
        case 9:
            month = "Септембри"
            break;
        case 10:
            month = "Октомбри"
            break;
        case 11:
            month = "Ноември"
            break;
        case 12:
            month = "Декември"
            break;
    }

    return month + " " + day + " " + year;

}

const PastEventCard = ({ pastEvent }) => {

    return (
        <div
            className="rounded-lg bg-opacity-30 bg-black"
        >


            <div className="pt-6 pb-4 sm:pb-6 lg:pt-10  px-6 lg:px-10 text-white  ">

                {pastEvent.date && (
                    <p className="uppercase mb-3 font-bold ">
                        {displayData(pastEvent.date)}
                    </p>
                )}

                {pastEvent.location && (
                    <h2 className="text-xl sm:text-3xl">{pastEvent.location}</h2>
                )}

                {pastEvent.description && (
                    <p className="mt-3 text-base sm:text-lg ">
                        {pastEvent.description}
                    </p>
                )}
                {/* <ArrowIcon className="mt-4" /> */}
            </div>

            {pastEvent.images && (
                <div className="p-1">
                    <ImageGallery images={pastEvent.images} />
                </div>
            )}

            {pastEvent.videos && (
                <div className={classNames("p-2",
                    (pastEvent.images && pastEvent.images.length) ? "-mt-2" : "",
                )}>
                    <VideoGallery videos={pastEvent.videos} />
                </div>
            )}




        </div>
    )
}

export default PastEventCard;