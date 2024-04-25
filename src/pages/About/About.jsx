import { SectionStyle } from "./styles";
import { GoStarFill } from "react-icons/go";

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getByDetails, reset } from "../../slices/byDetails";
import NavBar from "../../components/NavBar/NavBar";
import { formatTime } from "../../utils/formatTime";
import { formatDate } from "../../utils/formatDate";
import Loading from "../../components/Loading/Loading";

const About = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { movie, loading } = useSelector((state) => state.byDetails);

  console.log(movie);

  useEffect(() => {
    dispatch(getByDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const movies = Object.keys(movie).length;

  if (loading && movies !== 0) return <Loading />;

  return (
    <>
      <NavBar />
      {movies !== 0 && (
        <main>
          <SectionStyle>
            <div className="background-image">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="background-poster">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="info">
              <h2>{movie.title}</h2>
              <div className="date-time">
                <span>{formatTime(movie.runtime)}</span>
                <span>-</span>
                <span>{formatDate(movie.release_date)}</span>
              </div>
              <div className="vote">
                <span className="icon-star">
                  <GoStarFill />
                </span>
                <span>{movie.vote_average.toFixed(1)}/10</span>
              </div>
              <div className="genres">
                {movie.genres.map((genre) => (
                  <span>{genre.name}</span>
                ))}
              </div>
              <div className="overview">
                <h4>Sinopse</h4>
                <p>{movie.overview}</p>
              </div>
            </div>
          </SectionStyle>
        </main>
      )}
    </>
  );
};

export default About;
