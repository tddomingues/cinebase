import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"

import { useGetMovies } from "../../hooks/useGetMovies"
import {Container} from "./MoreAboutMovie.style"

const MoreAboutMovie = () => {
    const {options} = useGetMovies()
    const {id} = useParams()
    const [movieId, setMovieId] = useState([])

    useEffect(() => {
        const popularMovieId = async () => {     
            const getFetch = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            const response = await getFetch.json()
            console.log(response)
            setMovieId(response)
        }
        popularMovieId()
      }, [])
  return (
    <Container>
      {movieId.title}
    </Container>
  )
}

export default MoreAboutMovie
