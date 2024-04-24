import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ListSkeleton from '../../components/ListSkeleton/ListSkeleton'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getPopular, currentPage } from '../../slices/popularSlice'
import Loading from '../../components/Loading/Loading'

const Popular = ({title}) => {

  const dispatch = useDispatch()

  const {movies, page, loading} = useSelector(state => state.popularSlice)

  console.log(movies)

  useEffect(() => {
    dispatch(getPopular({page}))
  }, [dispatch, page])

  if(loading) return <Loading/>

  return (
    <>
      <NavBar/>
      <ListSkeleton movies={movies} currentPage={currentPage} title={title} page={page} loading={loading}/>
    </>
  )
}

export default Popular
