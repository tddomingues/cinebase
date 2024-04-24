import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ListSkeleton from '../../components/ListSkeleton/ListSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRated, reset, currentPage } from '../../slices/topRatedSlice'
import Loading from '../../components/Loading/Loading'

const RatedMovies = () => {

  const dispatch = useDispatch()

  const { movies, loading, page } = useSelector(state => state.topRatedSlice)

  useEffect(() => {
    dispatch(getTopRated({page}))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  if(loading) return <Loading/>
  if(movies.length === 0) return <Loading/>

  return (
    <>
      <NavBar />
      <ListSkeleton movies={movies} loading={loading} currentPage={currentPage} page={page}/>
    </>
  )
}

export default RatedMovies
