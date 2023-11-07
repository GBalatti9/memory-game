const AMOUNT_IMAGES = 12;
const URL = `https://api.giphy.com/v1/gifs/search?api_key=UhNngbbTnn9RqkzDZpFvG507RX3ZDGp2&q=michael-scott&limit=${AMOUNT_IMAGES}`;


import { useEffect, useState } from "react"
import './styles.css'


export const App = () => {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const apiGet = async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      const { data } = await result;
      const imagesAndId = data.map((gif) => {
        let { url } = gif.images.downsized;
        let { id, title } = gif;
        return [
          {
            url,
            id,
            title
          }]
      })

      return setGifs(imagesAndId);
    }

    apiGet(URL);
  }, [])



  return (
    <>
    </>
  )
}
