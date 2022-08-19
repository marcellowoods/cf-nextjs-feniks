const createImageArray = (imgsLength, imgsLocation) => {

    const images = Array.from({ length: imgsLength }, (_, i) => {

        const curImg = i + 1;
        return imgsLocation + curImg + ".jpg"

    }).reverse();

    return images;
}

export default createImageArray;