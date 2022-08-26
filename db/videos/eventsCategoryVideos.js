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

let lazeriEventsVideos = createVideosFromType(CATEGORY_TYPES.lazeri);
if(categoryVideos[CATEGORY_TYPES.lazeri]){
    lazeriEventsVideos = lazeriEventsVideos.concat(categoryVideos[CATEGORY_TYPES.lazeri])
}

let kinoEventsVideos = createVideosFromType(CATEGORY_TYPES.kino);
if(categoryVideos[CATEGORY_TYPES.kino]){
    kinoEventsVideos = kinoEventsVideos.concat(categoryVideos[CATEGORY_TYPES.kino]);
}

let koncertiEventsVideos = createVideosFromType(CATEGORY_TYPES.koncerti);
if(categoryVideos[CATEGORY_TYPES.koncerti]){
    koncertiEventsVideos = koncertiEventsVideos.concat(categoryVideos[CATEGORY_TYPES.koncerti]);
}


const eventsCategoryVideos = {

    lazeri: lazeriEventsVideos,
    kino: kinoEventsVideos,
    koncerti: koncertiEventsVideos
}

export default eventsCategoryVideos;