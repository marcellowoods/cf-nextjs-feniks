import CATEGORY_TYPES from "../CategoryTypes";

const imagesLocation = "/static/images/";

const galleryImagesLocation = imagesLocation + "gallery/";

const categoriesImagesLocation = imagesLocation + "categories/";

const sliderImagesLocation = imagesLocation + "slider/";

const pastEventImageLocation = imagesLocation + "events/past/";

const categoryImagesLocation = {

    [CATEGORY_TYPES.koncerti]: categoriesImagesLocation + CATEGORY_TYPES.koncerti + "/",
    [CATEGORY_TYPES.lazeri]: categoriesImagesLocation + CATEGORY_TYPES.lazeri + "/",
    [CATEGORY_TYPES.kino]: categoriesImagesLocation + CATEGORY_TYPES.kino + "/",

}

export {

    imagesLocation,

    galleryImagesLocation,

    categoriesImagesLocation,
    sliderImagesLocation,
    categoryImagesLocation,
    pastEventImageLocation
}

