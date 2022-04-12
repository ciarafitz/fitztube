import React, {useEffect} from "react";
import { useRouter } from "next/router";
import PlaylistCollection from "./PlaylistCollection";
import PlaylistView from "./PlaylistView";
import HomeButton from "./HomeButton";

export default function PlaylistPage() {

    const router = useRouter();
    const playlist_name = router.query['playlist'];
    
    useEffect(() => {
      PlaylistCollection.setSelected(playlist_name)
    })

    return(
      <div>
        <HomeButton></HomeButton>
        <center>
          <h1 className="title">{playlist_name}</h1>
        </center>
        <div className="grid-container">
          <PlaylistView></PlaylistView>
        </div>
      </div>
        
    );

}
