import './styles.css'

import { useFetchGifs } from "./hooks/useFetchGifs"
import { shuffleArray } from './helpers/shuffleArray';
import { Counter } from './components/Counter';
import { setClickCounter } from './helpers/setClickCounter';


export const App = () => {

  const { gifs, isLoading, updateGifs } = useFetchGifs();
  const { clickCounter, updateClickCounter } = setClickCounter();

  const handleClick = (index) => {
    updateClickCounter();
    console.log(index);
    const shuffled = shuffleArray(gifs);
    updateGifs(shuffled);
  }

  return (
    <>
    {
      isLoading && <h3>Loading...</h3>
    }
    <Counter clickCounter={ clickCounter }/>
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
