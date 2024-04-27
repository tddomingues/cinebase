import React from "react";

//proptypes
import PropTypes from "prop-types";

//styles
import { RxCross2 } from "react-icons/rx";
import { SectionVideo } from "./styles";

const Video = ({ video, handleClosed }) => {
  return (
    <SectionVideo>
      <div className="video">
        <button onClick={handleClosed}>
          <RxCross2 />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          width="1280 "
          height="720 "
        ></iframe>
      </div>
    </SectionVideo>
  );
};

Video.propTypes = {
  video: PropTypes.object,
  handleClosed: PropTypes.func,
};

export default Video;
