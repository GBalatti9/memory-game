// import './styles.css'

import { useFetchGifs } from "./hooks/useFetchGifs"


export const App = () => {

  const { gifs, isLoading } = useFetchGifs();

  console.log(gifs);

  return (
    <>
      <div className="grid">
        {
          gifs.map((gif) => (
            gif.map((el) => (
              <div
                key={el.id}
                onClick={() => shuffleArray(el.id)}
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
