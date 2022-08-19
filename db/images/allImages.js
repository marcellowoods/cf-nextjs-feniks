import galleryImages from "./galleryImages";
import categoryImages from "./categoryImages";
import chronologicalEvents from "../events/past/chronologicalEvents";


let allChronologicalEventsImages = chronologicalEvents.map(ev => ev.images).flat();
allChronologicalEventsImages = allChronologicalEventsImages.filter(element => {
    return element !== undefined;
});

allChronologicalEventsImages = allChronologicalEventsImages.reverse();

const allImages = [
    ...allChronologicalEventsImages,
    ...categoryImages["kino"],
    ...categoryImages["lazeri"],
    ...categoryImages["koncerti"],
    ...galleryImages
];

export default galleryImages;