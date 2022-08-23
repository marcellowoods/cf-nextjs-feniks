import { pastEventImageLocation } from "./images/imageLocations";

/**
 * @typedef {object} Message
 * @property {string} text
 * @property {string[]} images
 * @property {string[]} videos
 */


/** @type {Message[]} */ 
const messages = [
    {
        "text": "Светкавици, гръмотевици и лазерно шоу осветиха небето над село Ягода!",
        // "videos": ["https://www.facebook.com/1994175757577191/videos/5415398265174989"],
        "images": [
            pastEventImageLocation + "/2022-8-22/" + "1.jpg",
            pastEventImageLocation + "/2022-8-22/" + "2.jpg",
            pastEventImageLocation + "/2022-8-22/" + "3.jpg",
            pastEventImageLocation + "/2022-8-22/" + "4.jpg",
            pastEventImageLocation + "/2022-8-22/" + "5.jpg",
            pastEventImageLocation + "/2022-8-22/" + "7.jpg",
        ]
    }
]

export default messages;