import React, { useRef } from "react";

//proptypes
import PropTypes from "prop-types";

//router
import { useNavigate } from "react-router-dom";

//styles
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { SectionStyle } from "./styles";

const Movies = ({ title, movies, type }) => {
  const carousel = useRef(null);
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handlePrevious = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <SectionStyle>
      <div>
        <h2>{title}</h2>
        <p onClick={() => navigate(`/movies/${type}`)}>Mostrar Mais</p>
      </div>
      <div>
        <div className="arrows">
          <span onClick={handlePrevious}>
            <MdOutlineNavigateBefore />
          </span>
          <span onClick={handleNext}>
            <MdOutlineNavigateNext />
          </span>
        </div>
        <div ref={carousel} className="carousel">
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} onClick={() => handleDetails(movie.id)}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </SectionStyle>
  );
};

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default Movies;
