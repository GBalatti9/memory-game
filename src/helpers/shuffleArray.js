export const shuffleArray = (gifs) => {

    const shuffleGifs = [...gifs]

    for (let i = shuffleGifs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleGifs[i], shuffleGifs[j]] = [shuffleGifs[j], shuffleGifs[i]];
    }

    return shuffleGifs
    // setGifs(shuffleGifs);
};
