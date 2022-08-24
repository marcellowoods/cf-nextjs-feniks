import chronologicalEvents from "../events/past/chronologicalEvents";
import CATEGORY_TYPES from "../CategoryTypes";
import categoryVideos from "./categoryVideos";

const createVideosFromType = (categoryType) => {

    let eventVideos = chronologicalEvents.map(ev => {

        if(ev.categoryVideos){
            return ev.categoryVideos[categoryType]
        }else{
            return undefined;
        }
    
    }).flat();
    
    eventVideos = eventVideos.filter(element => {
        return element !== undefined;
    });

    return eventVideos;
    
}

let lazeriEventsVideos = createVideosFromType(CATEGORY_TYPES.lazeri).concat(categoryVideos[CATEGORY_TYPES.lazeri]);
lazeriEventsVideos = lazeriEventsVideos.filter(element => {
    return element !== undefined;
});

let kinoEventsVideos = createVideosFromType(CATEGORY_TYPES.kino).concat(categoryVideos[CATEGORY_TYPES.kino]);
kinoEventsVideos = kinoEventsVideos.filter(element => {
    return element !== undefined;
});

let koncertiEventsVideos = createVideosFromType(CATEGORY_TYPES.koncerti).concat(categoryVideos[CATEGORY_TYPES.koncerti]);
koncertiEventsVideos = koncertiEventsVideos.filter(element => {
    return element !== undefined;
});


const eventsCategoryVideos = {

    lazeri: lazeriEventsVideos,
    kino: kinoEventsVideos,
    koncerti: koncertiEventsVideos
}

export default eventsCategoryVideos;