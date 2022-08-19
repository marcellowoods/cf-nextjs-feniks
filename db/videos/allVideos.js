import galleryVideos from "./galleryVideos";
// import categoryVideos from "./categoryVides";
import chronologicalEvents from "../events/past/chronologicalEvents";


let allChronologicalEventsVideos = chronologicalEvents.map(ev => ev.videos).flat();
allChronologicalEventsVideos = allChronologicalEventsVideos.filter(element => {
    return element !== undefined;
});

const allVideos = [
    ...allChronologicalEventsVideos,
    ...galleryVideos
];

export default allVideos;