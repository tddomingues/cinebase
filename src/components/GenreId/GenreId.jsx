import React from 'react'

//router
import { Link } from 'react-router-dom'

//styles
import { SectionStyle } from './styles'

const GenreId = () => {
  
  return (
    <SectionStyle>
      <div>
        <Link to="/genre/action">Ação</Link>
        <Link to="/genre/adventure">Aventura</Link>
        <Link to="/genre/drama">Drama</Link>
        <Link to="/genre/horror">Horror</Link>
        <Link to="/genre/animation">Animação</Link>
        <Link to="/genre/crime">Crime</Link>
        <Link to="/genre/fantasy">Fantasia</Link>
        <Link to="/genre/comedy">Comédia</Link>
        <Link to="/genre/romance">Romance</Link>
      </div>
    </SectionStyle>
  )
}

export default GenreId
