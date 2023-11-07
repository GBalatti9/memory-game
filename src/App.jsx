const AMOUNT_IMAGES = 12;
const URL = `https://api.giphy.com/v1/gifs/search?api_key=UhNngbbTnn9RqkzDZpFvG507RX3ZDGp2&q=michael-scott&limit=${AMOUNT_IMAGES}`;

import { useEffect, useState } from "react"
import { apiGet } from "./helpers/httpGet";
// import './styles.css'


export const App = () => {

  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const newGifs = await apiGet(URL);
    setGifs(newGifs);
  }

  useEffect(() => {
      getGifs();
  }, [])



  return (
    <>
    </>
  )
}
