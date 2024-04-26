import React, { useRef, useState } from "react";

import { DetailsStyle, CreditsStyle, Video } from "./styles";
import imageDefault from "../../../assets/image-default.png";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { GoStarFill } from "react-icons/go";

import { formatTime } from "../../../utils/formatTime";
import { formatDate } from "../../../utils/formatDate";

const DetailsSkeleton = ({ detailsLength, details, credits, video }) => {
  const carousel = useRef();

  const [closed, setClosed] = useState(true);

  const handleNext = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handlePrevious = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleClosed = () => {
    setClosed(!closed);
  };

  return (
    <>
      {detailsLength !== 0 && (
        <main>
          {!closed && (
            <Video>
              <div className="video">
                <button onClick={handleClosed}>X</button>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  width="1280 "
                  height="720 "
                ></iframe>
              </div>
            </Video>
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
                <button onClick={handleClosed}>Ver Trailer</button>
              </div>
            </div>
          </DetailsStyle>
          <CreditsStyle>
            <div>
              <h4>Atores</h4>
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
                {credits &&
                  credits.map((credit) => (
                    <div key={credit.id}>
                      <img
                        src={
                          credit.profile_path
                            ? `https://image.tmdb.org/t/p/w185/${credit.profile_path}`
                            : imageDefault
                        }
                        alt={credit.title}
                      />
                      <h3>{credit.name}</h3>
                    </div>
                  ))}
              </div>
            </div>
          </CreditsStyle>
        </main>
      )}
    </>
  );
};

export default DetailsSkeleton;
