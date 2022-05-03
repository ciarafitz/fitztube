import React, {useEffect} from "react";
import { useRouter } from "next/router";

import PlaylistView from "../components/PlaylistView";
import HomeButton from "../components/HomeButton";
import PlaylistCollection from "../util/PlaylistCollection";

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
