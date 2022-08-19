import { categoryImagesLocation } from "./imageLocations";
import createImageArray from "./createImageArray";
import CATEGORY_TYPES from "../CategoryTypes";

const kinoImagesNum = 3;
const koncertiImagesNum = 10;
const lazeriImagesNum = 9;


const kinoImages = createImageArray(kinoImagesNum, categoryImagesLocation.kino);
const koncertiImages = createImageArray(koncertiImagesNum, categoryImagesLocation.koncerti);
const lazeriImages = createImageArray(lazeriImagesNum, categoryImagesLocation.lazeri);


const categoryImages = {

    [CATEGORY_TYPES.kino]: kinoImages,

    [CATEGORY_TYPES.lazeri]: lazeriImages,

    [CATEGORY_TYPES.koncerti]: koncertiImages
}

export default categoryImages;