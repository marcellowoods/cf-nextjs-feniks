import { categoryImagesLocation } from "./imageLocations";
import createImageArray from "./createImageArray";

const kinoImagesNum = 3;
const koncertiImagesNum = 10;
const lazeriImagesNum = 8;



const kinoImages = createImageArray(kinoImagesNum, categoryImagesLocation.kino);
const koncertiImages = createImageArray(koncertiImagesNum, categoryImagesLocation.koncerti);
const lazeriImages = createImageArray(lazeriImagesNum, categoryImagesLocation.lazeri);


const categoryImages = {

    "kino": kinoImages,

    "lazeri": lazeriImages,

    "koncerti": koncertiImages
}

export default categoryImages;