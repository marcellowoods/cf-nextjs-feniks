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
        "texts": [
            "Светкавици, гръмотевици и лазерно шоу оцветиха небето над село Ягода!",
            "Може да оцветим небето и над вашият град!",

        ],
        "video": videosLocation + "2.mp4"
        // "image": pastEventImageLocation + "/2022-8-22/" + "23.jpg",
    },

    {
        "texts": [
            "Концерт на Деси Слава и Глория с лазерно шоу.",
            "Можемe да композираме лазерно шоу на фона на вашата песен!",
        ],
        "video": videosLocation + "1.mp4"

    }

    // {
    //     "text": "Можемe да композираме лазерно шоу на фона на вашата песен!",
    //     "image": pastEventImageLocation + "/2022-8-13/" + "10.jpg",
    // },
].reverse();

export default messages;