// top-level component
// the first one created or routed to other components

import React from "react";
import VideoList from "./VideoList";
import AddPlaylistButton from "./AddPlaylistButton";

export default function App() {
  return (
    
    <div className="App">
      <center>
        <h1 className="title">FitzTube</h1>
      </center>
      <AddPlaylistButton />
      <div className="grid-container">
        <VideoList />
      </div>
    </div>
  );
 
}