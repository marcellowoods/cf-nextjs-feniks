import { galleryImagesLocation } from "./imageLocations";

const galleryImagesNum = 12;

const galleryImages = Array.from({length: galleryImagesNum}, (_, i) => {

    const curImg = i + 1;
    return galleryImagesLocation + curImg + ".jpg"

}).reverse();

export default galleryImages;

