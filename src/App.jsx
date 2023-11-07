import './styles.css'

import { useFetchGifs } from "./hooks/useFetchGifs"
import { shuffleArray } from './helpers/shuffleArray';


export const App = () => {

  const { gifs, isLoading, updateGifs } = useFetchGifs();

  const handleClick = (index) => {
    console.log(index);
    const shuffled = shuffleArray(gifs);
    updateGifs(shuffled);
  }

  // console.log(gifs);

  return (
    <>
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
