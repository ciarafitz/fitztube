import React from "react";
import Link from "next/link"

import YoutubeThumbnail from "./YoutubeThumbnail";
import PlaylistCollection from "../util/PlaylistCollection";
import Util from "../util/Util"

export default class PlaylistView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: { 
                state: {
                    videos:[]
                }
            },
            playlist_name: props.playlist,
            to_switch: undefined
        }
         this.setSwitch = this.setSwitch.bind(this);
         this.finishSwitch = this.finishSwitch.bind(this);
    }

    componentDidMount() {
        PlaylistCollection.loadCollection();
        this.setState({
            playlist: PlaylistCollection.find(PlaylistCollection.state.selected)
        })
    }

    setSwitch(name) {
        console.log(name)
        this.setState({
            to_switch: name
        })
    }

    finishSwitch(name) {
        PlaylistCollection.find(PlaylistCollection.state.selected).swapVideos(this.state.to_switch, name)
        this.setSwitch("")
    }

    render() {
        return (
            this.state.playlist.state.videos.map(video => (
                <div className="grid-item" onMouseDown={() => this.setSwitch(video)} onMouseUp={() => this.finishSwitch(video)}>
                <Link
                    href={{
                        pathname: "/YoutubeEmbed",
                        query: video
                    }}
                >
                    <div className="cursor thumbnail-title" >
                    < YoutubeThumbnail url={video.thumbnail_url} />
                    {video.title} 
                    <br></br>
                    <span className="thumbnail-views">{Util.addCommasToNumber(video.views)} views</span>
                    <br></br>
                    </div>
                </Link>        
                    <button title="Remove video from playlist" className="action-button remove-button" onClick={() => {PlaylistCollection.find(this.state.playlist.state.name).removeVideo(video); this.setState({playlist: PlaylistCollection.find(PlaylistCollection.state.selected)})}}>-</button>
                    </div>
            ))
        )
    }

}
