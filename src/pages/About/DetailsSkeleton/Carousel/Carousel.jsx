import React, { useRef } from "react";

//proptypes
import PropTypes from "prop-types";

//styles
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import imageDefault from "../../../../assets/image-default.png";
import { CarouselStyle } from "./styles";

const Carousel = ({ credits }) => {
  const carousel = useRef();

  const handleNext = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handlePrevious = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <CarouselStyle>
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
    </CarouselStyle>
  );
};

Carousel.propTypes = {
  credits: PropTypes.array,
};

export default Carousel;
