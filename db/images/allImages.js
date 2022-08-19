import categoryImages from "./categoryImages";
import chronologicalEvents from "../events/past/chronologicalEvents";
import CATEGORY_TYPES from "../CategoryTypes.js"


let allChronologicalEventsImages = chronologicalEvents.map(ev => ev.images).flat();
allChronologicalEventsImages = allChronologicalEventsImages.filter(element => {
    return element !== undefined;
});

const allImages = [
    ...allChronologicalEventsImages,
    ...categoryImages[CATEGORY_TYPES.kino],
    ...categoryImages[CATEGORY_TYPES.lazeri],
    ...categoryImages[CATEGORY_TYPES.koncerti],
];

export default allImages;