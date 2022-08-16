import chronologicalEvents from "./db/events/past/chronologicalEvents";
const galleryImagesLocation = "/static/images/gallery/";

const galleryImagesNum = 12;

const galleryImages = [];

for (let i = 1; i <= galleryImagesNum; i++) {
    galleryImages.push(galleryImagesLocation + i + ".jpg")
}

const categoryImages = {
    "kino": [
        "https://res.cloudinary.com/dilzsg1if/image/upload/c_scale,w_1083/v1657522953/feniks/10636548_1523410987892180_3933292928985701961_o_fk3m2i.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657522952/feniks/238548814_3110444935855436_7163811446132835593_n_nunwo2.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657522952/feniks/239867017_4584060064958072_6017204552876346068_n_kz7xdv.jpg",
    ],
    "sceni": [
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657617507/feniks/scena_cropped_ihviwl.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657522937/feniks/69105824_2480934198806516_492599952480927744_n_cexztn.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657522936/feniks/69449806_2479006838999252_1468261108740521984_n_uup0hr.jpg",
    ],
    "lazeri": [
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1657617322/feniks/cropped_pbrfwy.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627264/feniks/laser/293116393_3198121077182647_2823408476453466303_n_w7teyv.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/119724333_2679845362343557_3290518261089599327_n_absllt.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/107102810_2616498898678204_7085876758010560535_n_cyo4wv.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/293591760_3198121410515947_5919224355793840029_n_rlzxdi.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/107372468_2616498428678251_449831797959716121_n_nkieyc.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/119716130_2679845479010212_4431343672543211962_n_abvvey.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/107102401_2616498768678217_5402467215666011265_n_gb6opw.jpg",
        "https://res.cloudinary.com/dilzsg1if/image/upload/v1659627263/feniks/laser/103373701_2616499058678188_5715727434149781488_n_tw2du5.jpg"
    ],
    "koncerti": [

    ]
}

const koncertiImagesLocation = "/static/images/categories/koncerti/";
const koncertiImagesNum = 10;

for (let i = 1; i <= koncertiImagesNum; i++) {
    categoryImages["koncerti"].push(koncertiImagesLocation + i + ".jpg")
}

const categoryVideos = {
    "lazeri": [
        "https://www.youtube.com/watch?v=vt4gcB-j9cg"
    ]
};

let allChronologicalEventsImages = chronologicalEvents.map(ev => ev.images).flat();
allChronologicalEventsImages = allChronologicalEventsImages.filter(element => {
    return element !== undefined;
});

const allImages = [
    ...allChronologicalEventsImages,
    ...categoryImages["kino"],
    ...categoryImages["sceni"],
    ...categoryImages["lazeri"],
    ...categoryImages["koncerti"],
    ...galleryImages
];

let allChronologicalEventsVideos = chronologicalEvents.map(ev => ev.videos).flat();
allChronologicalEventsVideos = allChronologicalEventsVideos.filter(element => {
    return element !== undefined;
});

const allVideos = [
    ...allChronologicalEventsVideos,
    "https://www.youtube.com/watch?v=DLqlZ3jWXok",
    "https://www.youtube.com/watch?v=ZAechla-p7w",
    "https://www.youtube.com/watch?v=vt4gcB-j9cg",
    "https://www.youtube.com/watch?v=-vthhIGv7UE",
    "https://www.youtube.com/watch?v=i2Y14luWvQM",
    "https://www.youtube.com/watch?v=6dbBH16EGiA",
    "https://www.youtube.com/watch?v=FsfbYx5Q3yY",
    "https://www.youtube.com/watch?v=P6PCglCzHJc",
    "https://www.youtube.com/watch?v=niN9hbgGSZA",
    "https://www.youtube.com/watch?v=xsyFGLJGv_Y",
    "https://www.youtube.com/watch?v=MxhK82665uc",
    "https://www.youtube.com/watch?v=IoXknvaD_xQ",
    "https://www.youtube.com/watch?v=9B8ZyXbpd1o",
    "https://www.youtube.com/watch?v=2TO9jDvgKYQ",
    "https://www.youtube.com/watch?v=dLrYu_X5Mqc",
    "https://www.youtube.com/watch?v=uhJAYqPzBxw"
];

const sliderImagesLocation = "/static/images/slider/";

const pastEventImageLocation = "/static/images/events/past/";

const sliderImagesFallback = sliderImagesLocation + "fallback.jpg";

const sliderImages = [
    pastEventImageLocation + "2022-8-13/4.jpg",
    pastEventImageLocation + "2022-8-13/11.jpg",
    pastEventImageLocation + "2022-8-13/13.jpg",
    sliderImagesLocation + "1" + ".jpg",
    // sliderImagesLocation + "3" + ".jpg",
    sliderImagesLocation + "4" + ".jpg",
    // sliderImagesLocation + "5" + ".jpg",
    sliderImagesLocation + "6" + ".jpg",

    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/1_fg4jtn.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/2_jh4mwt.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/3_tbrl9u.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/4_xlpxom.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/5_jfxsxc.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/6_u4amdi.jpg",
    // "https://res.cloudinary.com/dilzsg1if/image/upload/v1659882356/feniks/slider/7_d28eyf.jpg",

];

export {
    pastEventImageLocation,
    categoryImages,
    allImages,
    sliderImages,
    sliderImagesFallback,

    categoryVideos,
    allVideos
};

