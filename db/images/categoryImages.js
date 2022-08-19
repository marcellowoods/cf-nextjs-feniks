import { categoryImagesLocation } from "./imageLocations";

const kinoImagesNum = 3;
const koncertiImagesNum = 10;
const lazeriImagesNum = 8;

const createImageArray = (imgsLength, imgsLocation) => {

    const images = Array.from({ length: imgsLength }, (_, i) => {

        const curImg = i + 1;
        return imgsLocation + curImg + ".jpg"

    }).reverse();

    return images;
}

const kinoImages = createImageArray(kinoImagesNum, categoryImagesLocation.kino);
const koncertiImages = createImageArray(koncertiImagesNum, categoryImagesLocation.koncerti);
const lazeriImages = createImageArray(lazeriImagesNum, categoryImagesLocation.lazeri);


const categoryImages = {

    "kino": kinoImages,

    "lazeri": lazeriImages,


    "koncerti": koncertiImages
}

export default categoryImages;