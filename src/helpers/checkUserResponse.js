import { useState } from "react"

export const checkUserResponse = () => {

    const [clickedImages, setClickedImages] = useState([]);

    const findGif = (index) => {
        let findGifById = clickedImages.find((el) => el === index);
        console.log(clickedImages);
        return findGifById;
    }

    const updateSetClickImages = (index) => {
        setClickedImages((prevClickImages) => [...prevClickImages, index])
    }

    const resetClickImages = () => {
        setClickedImages([]);
    }

    return {
        findGif,
        updateSetClickImages,
        resetClickImages,
    }
}
