// import './styles.css'

import { useFetchGifs } from "./hooks/useFetchGifs"


export const App = () => {

  const { gifs, isLoading } = useFetchGifs();

  console.log(gifs);

  return (
    <>
    </>
  )
}
