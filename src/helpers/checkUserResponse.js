import { useState } from "react"

export const checkUserResponse = () => {

    const [clickedImages, setClickedImages] = useState([]);

    let findGifById = clickedImages.find((el) => el === index);
    console.log(clickedImages);


    // if (!findGifById) {
    //     setClickedImages([...clickedImages, index]);
    //     setClickCounter((prevCounter) => prevCounter + 1);
    //     // console.log(clickCounter);
    // } else {
    //     setBestScore(clickCounter);
    //     setClickCounter(0);
    //     setClickedImages([]);
    //     console.log(clickedImages);
    // }
}
