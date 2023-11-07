export const shuffleArray = (gifs) => {

    const shuffleGifs = [...gifs]

    // let findGifById = clickedImages.find((id) => id === index);
    // console.log(clickedImages);


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

    for (let i = shuffleGifs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleGifs[i], shuffleGifs[j]] = [shuffleGifs[j], shuffleGifs[i]];
    }

    return shuffleGifs;
    // setGifs(shuffleGifs);
};
