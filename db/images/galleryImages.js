import { galleryImagesLocation } from "./imageLocations";

import createImageArray from "./createImageArray";

const galleryImagesNum = 12;

const galleryImages = createImageArray(galleryImagesNum, galleryImagesLocation);

export default galleryImages;

