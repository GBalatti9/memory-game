import './styles.css'

import { useFetchGifs } from "./hooks/useFetchGifs"
import { shuffleArray, setClickCounter, checkUserResponse } from './helpers';
import { Counter } from './components/Counter';
import { useState } from 'react';
// import { setClickCounter } from './helpers/setClickCounter';


export const App = () => {

  const { gifs, isLoading, updateGifs } = useFetchGifs();
  const { clickCounter, updateClickCounter, resetCounter } = setClickCounter();
  const { findGif, updateSetClickImages, resetClickImages } = checkUserResponse();
  const [bestScore, setBestScore] = useState(0);

  const handleNotFoundImageId = (index) => {
    updateClickCounter();
    updateSetClickImages(index);
  }

  const handleFoundImageId = () => {
    if (clickCounter > bestScore) {
      setBestScore(clickCounter)
    }
    resetCounter();
    resetClickImages();
  }

  const handleClick = (index) => {
    let findClickImage = findGif(index);

    if (!findClickImage) {
      handleNotFoundImageId(index);
    } else {
      handleFoundImageId();
    }

    const shuffled = shuffleArray(gifs);
    updateGifs(shuffled);
  }

  return (
    <>
      {
        isLoading && <h3>Loading...</h3>
      }
      <div>
        <h2>Michael Scott Memory Game</h2>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
      <Counter clickCounter={clickCounter} bestScore={bestScore} />
      <div className="grid">
        {
          gifs.map((gif) => (
            gif.map((el) => (
              <div
                key={el.id}
                onClick={() => handleClick(el.id)}
                className="grid-item">
                <img
                  className={el.title}
                  src={el.url}
                  alt="image"
                  onMouseOver={() => { document.body.style.cursor = 'pointer' }}
                  onMouseOut={() => { document.body.style.cursor = 'auto' }} />
              </div>
            ))


          ))
        }
      </div>

    </>
  )
}
