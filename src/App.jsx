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
      <div className='main-container'>
        <h2 className='title'>Diego Maradona Memory Game</h2>
        <p className='subtitle'>Get points by clicking on an image but don't click on any more than once!</p>
        <Counter clickCounter={clickCounter} bestScore={bestScore} />
      </div>
      {
        isLoading && <h3>Loading...</h3>
      }
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
                  alt="image"/>
              </div>
            ))


          ))
        }
      </div>

    </>
  )
}
