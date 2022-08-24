import { pastEventImageLocation } from "./images/imageLocations";

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
        // "video": "https://www.youtube.com/watch?v=oCPrOaZvV6U",
        "image": pastEventImageLocation + "/2022-8-22/" + "23.jpg",
        
    },

    {
        "text": "Можемe да композираме лазерно шоу  на фона на вашата песен!",
        "video": "https://www.youtube.com/watch?v=oCPrOaZvV6U"
    },

    {
        "text": "Изкарайте незабравими мигове с нас!",
        "video": "https://www.youtube.com/watch?v=oCPrOaZvV6U"
    },

    {
        "text": "Може да оцветим небето и над вашият град!",
        "video": "https://www.youtube.com/watch?v=oCPrOaZvV6U"
    }
]

export default messages;