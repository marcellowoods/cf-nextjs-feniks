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
            {
                value: "Светкавици, гръмотевици и лазерно шоу осветиха небето над село Ягода!",
                weight: 0.5
            },
            {
                value: "Може да оцветим небето и над вашият град!",
                weight: 0.5
            },
        ],
        "video": videosLocation + "2.mp4"
        // "image": pastEventImageLocation + "/2022-8-22/" + "23.jpg",
    },

    // {
    //     "text": "Може да оцветим небето и над вашият град!",
    //     "image": pastEventImageLocation + "/2022-8-22/" + "8.jpg",
    //     // "video": "https://www.youtube.com/watch?v=byEnsqe28y8"
    // },

    {
        "texts": [
            {
                value:  "Концерт на Деси Слава и Глория с лазерно шоу.",
                weight: 0.5
            },
            {
                value: "Можемe да композираме лазерно шоу на фона на вашата песен!",
                weight: 0.5
            }
           
            
        ],
        "video": videosLocation + "1.mp4"
    },

    {
        "texts": [
            {
                value: "Фестивал ЗВЕЗДИ ПОД ЗВЕЗДИТЕ в Раювци",
                weight: 0.4
            },
            {
                value: "лазерно шоу",
                weight: 0.1
            },
            {
                value: "Краси Радков",
                weight: 0.1
            },
            {
                value: "Миро Каризма",
                weight: 0.1
            },
            {
                value: "Братя Аргирови",
                weight: 0.1
            },
            {
                value: "Нели Петкова",
                weight: 0.1
            },
            {
                value: "ансамбъл Българе",
                weight: 0.1
            }
        ],

        "video": videosLocation + "1.mp4"
    }

    // {
    //     "text": "Можемe да композираме лазерно шоу на фона на вашата песен!",
    //     "image": pastEventImageLocation + "/2022-8-13/" + "10.jpg",
    // },
].reverse();

export default messages;