// Visual component
// When thumbnail on video list is clicked, get routed to this component
// with the video_id of the thumbnail you clicked on
import React from "react";
import { useRouter } from "next/router";
import HomeButton from "../components/HomeButton"
import PlaylistCollection from "../util/PlaylistCollection";
import Util from "../util/Util"

// Video Component
export default function YoutubeEmbed() {
  const router = useRouter();
  const video = router.query;


  let playlists = PlaylistCollection.state.playlists.map(playlist => (
    <option>{playlist.state.name}</option>
  )) 

  const setPlaylist = (event) => {
    selectedPlaylist = event.target.value
  }

  var selectedPlaylist;
  if(PlaylistCollection.state.playlists.length > 0) {
    selectedPlaylist = PlaylistCollection.state.playlists[0].state.name;
  }

  return(
    <div className="video-text">
    <HomeButton></HomeButton>
    <center>
      <iframe 
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${video.video_id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      />
      </center>
      <h1 className="video-title">
        {video.title}
      </h1>
      <h3 className="video-description gray-text">
        {Util.addCommasToNumber(video.views)} views &#8226; {Util.convertDate(video.created_at)}
      </h3>
      <p className="video-description">
        {video.description}
      </p>

      <center>
        <select className="sel" 
                onChange={setPlaylist}
        >
          {playlists}
        </select>
        <button className="action-button"
                onClick={() => PlaylistCollection.find(selectedPlaylist).addVideo(video)} 
                disabled={PlaylistCollection.state.playlists.length == 0}> 
                  Add
        </button>
      </center>
    </div>
  );
}
