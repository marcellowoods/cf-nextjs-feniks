import { pastEventImageLocation } from "./images/imageLocations";
import { videosLocation } from "./videos/videosLocations";
//should have video or image but not both
/**
 * @typedef {object} Message
 * @property {string} text
 * @property {string} image
 * @property {string} video
 */


/** @type {Message[]} */ 
const messages = [

    {
        "text": "Светкавици, гръмотевици и лазерно шоу осветиха небето над село Ягода!",
        "video": videosLocation + "2.mp4"
        // "image": pastEventImageLocation + "/2022-8-22/" + "23.jpg",
    },

    {
        "text": "Може да оцветим небето и над вашият град!",
        "image": pastEventImageLocation + "/2022-8-22/" + "8.jpg",
        // "video": "https://www.youtube.com/watch?v=byEnsqe28y8"
    },

    {
        "text": "Концерт на Деси Слава и Глория с лазерно шоу.",
        "video": videosLocation + "1.mp4"
    },

    {
        "text": "Можемe да композираме лазерно шоу на фона на вашата песен!",
        "image": pastEventImageLocation + "/2022-8-13/" + "10.jpg",
    },
]

export default messages;