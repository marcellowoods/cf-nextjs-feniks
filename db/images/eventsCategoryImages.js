import chronologicalEvents from "../events/past/chronologicalEvents";
import CATEGORY_TYPES from "../CategoryTypes";
import categoryImages from "./categoryImages";

const createImagesFromType = (categoryType) => {

    let eventImages = chronologicalEvents.map(ev => {

        if (ev.categoryImages) {
            return ev.categoryImages[categoryType]
        } else {
            return undefined;
        }

    }).flat();

    eventImages = eventImages.filter(element => {
        return element !== undefined;
    });

    return eventImages;

}

let lazeriEventsImages = createImagesFromType(CATEGORY_TYPES.lazeri);
if (categoryImages[CATEGORY_TYPES.lazeri]) {
    lazeriEventsImages = lazeriEventsImages.concat(categoryImages[CATEGORY_TYPES.lazeri]);
}

let kinoEventsImages = createImagesFromType(CATEGORY_TYPES.kino)
if (categoryImages[CATEGORY_TYPES.kino]) {
    kinoEventsImages = kinoEventsImages.concat(categoryImages[CATEGORY_TYPES.kino]);
}

let koncertiEventsImages = createImagesFromType(CATEGORY_TYPES.koncerti)
if (categoryImages[CATEGORY_TYPES.koncerti]) {
    koncertiEventsImages = koncertiEventsImages.concat(categoryImages[CATEGORY_TYPES.koncerti]);
}


const eventsCategoryImages = {

    lazeri: lazeriEventsImages,
    kino: kinoEventsImages,
    koncerti: koncertiEventsImages
}

export default eventsCategoryImages;