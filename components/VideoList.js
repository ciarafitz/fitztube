// Visual component
// Make an API call, get a list of videos, loop through to create and display
// thumbnail components
import React from "react";
import Link from "next/link";

import YoutubeThumbnail from "./YoutubeThumbnail";
import PlaylistCollection from "../util/PlaylistCollection";
import Util from "../util/Util";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videos: []
    };
  }

  // API call to fetch videos(data) using CORS proxy to avoid "No Access Control" problems
  // https:// link is the endpoint of the Collab-mock-data
  componentDidMount() {
    fetch("https://dry-sierra-68794.herokuapp.com/https://mock-youtube-api.herokuapp.com/api/videos")
      .then(res => res.json()) 
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            videos: result.videos //data gotten back from API call
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      PlaylistCollection.loadCollection();
  }

  render() {
    const { error, isLoaded, videos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // Map function on list of videos, creates an HTML tag for each video and thumbnail
        // Loops through (=>) video list for each video
        // Video list -> link created with metadata -> thumbnail
        videos.map(video => (
          <div className="grid-item">
            <Link
              href={{
                  pathname: "/YoutubeEmbed",
                  query: video
              }}
            >
              <div className="cursor thumbnail-title">
                < YoutubeThumbnail url={video.thumbnail_url} />
                {video.title} 
                <br></br>
                <span className="thumbnail-views">{Util.addCommasToNumber(video.views)} views</span>
                <br></br>
              </div>
            </Link>        
          </div>
        ))
      );
    }
  }
}

export default VideoList;