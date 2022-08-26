import { pastEventImageLocation } from "./images/imageLocations";


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
        "video": "https://www.youtube.com/watch?v=BNnIDDqHcwo",
        // "image": pastEventImageLocation + "/2022-8-22/" + "23.jpg",
    },

    {
        "text": "Може да оцветим небето и над вашият град!",
        "video": "https://www.youtube.com/watch?v=byEnsqe28y8"
    },

    {
        "text": "Концерт на Деси Слава и Глория с лазерно шоу.",
        "video": "https://www.youtube.com/watch?v=ye2pne5k9sc"
    },

    {
        "text": "Можемe да композираме лазерно шоу на фона на вашата песен!",
        "video": "https://www.youtube.com/watch?v=5Eh5RVEZXIY"
    },
]

export default messages;