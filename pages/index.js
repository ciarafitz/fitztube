// Top-level component
// ** the First one created or routed to other components **

import React from "react";
import VideoList from "../components/VideoList";
import AddPlaylistButton from "../components/AddPlaylistButton";

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