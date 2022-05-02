import React from "react";
import Link from "next/link";

import PlaylistCollection from "../util/PlaylistCollection";
import Playlist from "../util/Playlist";

export default class AddPlaylistButton extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          selectedPlaylist: undefined,
          playlists: undefined
        }

        this.createNewPlaylist = this.createNewPlaylist.bind(this);
        this.printCollection = this.printCollection.bind(this);
        this.setPlaylist = this.setPlaylist.bind(this);
        this.populateSelectBar = this.populateSelectBar.bind(this);
    }

    createNewPlaylist = ( _ => {
        let enteredName = prompt('Please enter Playlist name')
        if(enteredName == undefined) {
          return;
        }
        enteredName = enteredName.trim();
        if(enteredName != "") {
          PlaylistCollection.addPlaylist(new Playlist(enteredName));
          this.populateSelectBar();
        }

        if(PlaylistCollection.state.playlists.length == 1) {
          PlaylistCollection.setSelected(enteredName)
          this.setState({
            selectedPlaylist: enteredName
          })
        }
      })

    printCollection = ( _ => {
        PlaylistCollection.printCollection()
    })

    setPlaylist = ( event => {
      this.setState({
        selectedPlaylist: event.target.value
      })
      PlaylistCollection.setSelected(event.target.value)
    })

    populateSelectBar = ( _ => {
      let sel_playlists = PlaylistCollection.state.playlists.map(playlist => (
        <option>{playlist.state.name}</option>
      ))
      this.setState({
        playlists: sel_playlists
      })
    })

    componentDidMount() {
      console.log(PlaylistCollection.state.selected)
      if(PlaylistCollection.state.playlists.length > 0) {
        this.setState({
          selectedPlaylist: PlaylistCollection.state.playlists[0].state.name
        });
      }
      this.populateSelectBar();
    }
    

  render() {
  
    return (
      <div>
        <select title="Select playlist" className="sel" onChange={this.setPlaylist}>
          {this.state.playlists}
        </select>
        <Link
            href={`/PlaylistPage?playlist=${this.state.selectedPlaylist}`}
          >
          <button title="View selected playlist" 
                  className="action-button"
                  disabled={PlaylistCollection.state.selected == undefined}>
                    Go
          </button>
        </Link>
        <button title="Create new playlist" 
                className="action-button" 
                onClick={() => this.createNewPlaylist()}>
                  +
        </button>
      </div>
    )
  }
  
};
