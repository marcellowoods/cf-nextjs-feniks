import chronologicalEvents from "../events/past/chronologicalEvents";
import CATEGORY_TYPES from "../CategoryTypes";
import categoryImages from "./categoryImages";

const createImagesFromType = (categoryType) => {

    let eventImages = chronologicalEvents.map(ev => {

        if(ev.categoryImages){
            return ev.categoryImages[categoryType]
        }else{
            return undefined;
        }
    
    }).flat();
    
    eventImages = eventImages.filter(element => {
        return element !== undefined;
    });

    return eventImages;
    
}

let lazeriEventsImages = createImagesFromType(CATEGORY_TYPES.lazeri).concat(categoryImages[CATEGORY_TYPES.lazeri]);

let kinoEventsImages = createImagesFromType(CATEGORY_TYPES.kino).concat(categoryImages[CATEGORY_TYPES.kino]);

let koncertiEventsImages = createImagesFromType(CATEGORY_TYPES.koncerti).concat(categoryImages[CATEGORY_TYPES.koncerti]);


const eventsCategoryImages = {

    lazeri: lazeriEventsImages,
    kino: kinoEventsImages,
    koncerti: koncertiEventsImages
}

export default eventsCategoryImages;