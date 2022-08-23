const pastEventImageLocation = "/static/images/events/past/";
import CATEGORY_TYPES from "../../CategoryTypes";

const createImageArray = (imgsLength, imgsLocation) => {

    const images = Array.from({ length: imgsLength }, (_, i) => {
        const curImg = i + 1;
        return imgsLocation + curImg + ".jpg"

    }).reverse();

    return images;
}

/**
 * @typedef {object} pastEvent
 * @property {string} location
 * @property {object} date
 * @property {string} description
 * @property {string[]} images
 * @property {string[]} categoryImages
 * @property {string[]} categoryVideos
 */


/** @type {pastEvent[]} */
const chronologicalEvents = [
    {
        location: " село Петърч",
        date: { year: 2022, month: 7, day: 15 },
        description: "Прожекция на новия български филм \"Като за последно\".",
        images: [
            pastEventImageLocation + "/2022-7-15/" + "1" + ".jpg",
        ],
        categoryImages: {
            [CATEGORY_TYPES.kino]: [
                pastEventImageLocation + "/2022-7-15/" + "1" + ".jpg",
            ],
        },
    },
    {
        location: "село Драговищица",
        date: { year: 2022, month: 7, day: 16 },
        description: "Продължаваме с киното под звездите",
        images: [
            pastEventImageLocation + "/2022-7-16/" + "1" + ".jpg",
            pastEventImageLocation + "/2022-7-16/" + "2" + ".jpg",
        ],
        categoryImages: {
            [CATEGORY_TYPES.kino]: [
                pastEventImageLocation + "/2022-7-16/" + "2" + ".jpg",
            ],
        },
    },
    {
        location: "град Костинброд",
        date: { year: 2022, month: 7, day: 22 },
        description: "Прожекция на новия български филм \"Петя на моята Петя\" под звездите.",
        images: [
            pastEventImageLocation + "/2022-7-22/" + "1" + ".jpg",
        ],
        categoryImages: {
            [CATEGORY_TYPES.kino]: [
                pastEventImageLocation + "/2022-7-22/" + "1" + ".jpg",
            ],
        },
    },

    {
        location: "град Брегово",
        date: { year: 2022, month: 8, day: 13 },
        description: "Деси Слава, Глория и атрактивно лазерно шоу.",
        images: createImageArray(11, pastEventImageLocation + "/2022-8-13/"),
        categoryImages: {
            [CATEGORY_TYPES.lazeri]: [
                pastEventImageLocation + "2022-8-13/9.jpg",
                pastEventImageLocation + "2022-8-13/10.jpg",
                pastEventImageLocation + "2022-8-13/11.jpg",
                pastEventImageLocation + "2022-8-13/12.jpg",
            ],
            [CATEGORY_TYPES.koncerti]: [
                pastEventImageLocation + "2022-8-13/1.jpg",
                pastEventImageLocation + "2022-8-13/2.jpg",
                pastEventImageLocation + "2022-8-13/3.jpg",
            ]
        },
        videos: [
            "https://www.youtube.com/watch?v=iYqoDpUEsnw",
            "https://www.youtube.com/watch?v=ye2pne5k9sc",
            "https://www.youtube.com/watch?v=gbdYIsYonK0",
            "https://www.youtube.com/watch?v=Nb88kPeSeCE",
            "https://www.youtube.com/watch?v=oCPrOaZvV6U"

        ]
    },

    {
        location: "село Ягода",
        date: { year: 2022, month: 8, day: 22 },
        description: "Концерт на Тони Димитрова и лазерно шоу",
        images: createImageArray(23, pastEventImageLocation + "/2022-8-22/"),
        categoryImages: {
            [CATEGORY_TYPES.lazeri]: createImageArray(23, pastEventImageLocation + "/2022-8-22/"),
        },

    }

].reverse();

export default chronologicalEvents;