import React from "react";

import { SectionStyle } from "../styles";
import imageDefault from "../../../assets/image-default.png";
import { GoStarFill } from "react-icons/go";

import { formatTime } from "../../../utils/formatTime";
import { formatDate } from "../../../utils/formatDate";

const DetailsSkeleton = ({ movies, movie }) => {
  return (
    <>
      {movies !== 0 && (
        <main>
          <SectionStyle>
            <div className="background-image">
              {movie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              ) : null}
            </div>
            <div className="background-poster">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : imageDefault
                }
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
                {movie.genres.map((genre, i) => (
                  <span key={i}>{genre.name}</span>
                ))}
              </div>
              <div className="overview">
                <h4>Sinopse</h4>
                <p>{movie.overview || "..."}</p>
              </div>
            </div>
          </SectionStyle>
        </main>
      )}
    </>
  );
};

export default DetailsSkeleton;
