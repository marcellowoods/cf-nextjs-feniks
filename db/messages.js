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
        
    }
]

export default messages;