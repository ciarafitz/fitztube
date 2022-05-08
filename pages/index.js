// Top-level component
// ** the First one created or routed to other components **

import React from "react";
import VideoList from "../components/VideoList";
import AddPlaylistButton from "../components/AddPlaylistButton";
import Logo from "../public/Logo.png"; //next.js imgages go under public in root directory

console.log(Logo);

export default function App() {
  return (
    
    <div className="App">
      <center>
        {/* <h1 className="title">FitzTube</h1> */}
        {/* <img src={require('/images/Logo.png')} /> */}
        <img src="/Logo.png" />  {/*don't need to add "/public" to referance the image*/}
      
        
      </center>
      <AddPlaylistButton />
      <div className="grid-container">
        <VideoList />
      </div>
    </div>
  );
}
