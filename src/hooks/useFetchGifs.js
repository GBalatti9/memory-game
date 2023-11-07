import { useEffect, useState } from "react";
import { apiGet } from "../helpers/httpGet";

const AMOUNT_IMAGES = 12;
const URL = `https://api.giphy.com/v1/gifs/search?api_key=UhNngbbTnn9RqkzDZpFvG507RX3ZDGp2&q=michael-scott&limit=${AMOUNT_IMAGES}`;

export const useFetchGifs = () => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async () => {
        const newGifs = await apiGet(URL);
        setGifs(newGifs);
        setIsLoading(false);
    }

    const updateGifs = (shuffleGifs) => {
        setGifs(shuffleGifs)
    }

    useEffect(() => {
        getGifs();
    }, [])

    return {
        gifs,
        isLoading,
        updateGifs,
    }
}
