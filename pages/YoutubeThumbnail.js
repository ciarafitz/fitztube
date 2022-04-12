// visual component
// preview picture of the video_id
import React from "react";
import PropTypes from "prop-types";

// Video Component
const YoutubeThumbnail = ({ url }) => (
  <div>
    <img
      width="248"
      height="140"
      src={`${url}`}
    />
  </div>
);

YoutubeThumbnail.propTypes = {
  url: PropTypes.string.isRequired
};

export default YoutubeThumbnail;