import React, { useState } from "react";

import { DetailsStyle } from "./styles";
import imageDefault from "../../../assets/image-default.png";
import { GoStarFill } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";

import { formatTime } from "../../../utils/formatTime";
import { formatDate } from "../../../utils/formatDate";

import Video from "./Video/Video";
import Carousel from "./Carousel/Carousel";

const DetailsSkeleton = ({ detailsLength, details, credits, video }) => {
  const [closed, setClosed] = useState(true);

  const handleClosed = () => {
    setClosed(!closed);
  };

  return (
    <>
      {detailsLength !== 0 && (
        <main>
          {!closed && video && (
            <Video video={video} handleClosed={handleClosed} />
          )}
          <DetailsStyle>
            <div className="background-image">
              {details.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                  alt={details.title}
                />
              ) : null}
            </div>
            <div className="background-poster">
              <img
                src={
                  details.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${details.poster_path}`
                    : imageDefault
                }
                alt={details.title}
              />
            </div>
            <div className="info">
              <h2>{details.title}</h2>
              <div className="date-time">
                <span>{formatTime(details.runtime)}</span>
                <span>-</span>
                <span>{formatDate(details.release_date)}</span>
              </div>
              <div className="vote">
                <span className="icon-star">
                  <GoStarFill />
                </span>
                <span>{details.vote_average.toFixed(1)}/10</span>
              </div>
              <div className="genres">
                {details.genres.map((genre, i) => (
                  <span key={i}>{genre.name}</span>
                ))}
              </div>
              <div className="overview">
                <h4>Sinopse</h4>
                <p>{details.overview || "..."}</p>
              </div>
              <div className="btn-video">
                <button onClick={handleClosed}>
                  <span>Trailer</span>
                  <RiMovieLine />
                </button>
              </div>
            </div>
          </DetailsStyle>
          {credits.length !== 0 && <Carousel credits={credits} />}
        </main>
      )}
    </>
  );
};

export default DetailsSkeleton;
