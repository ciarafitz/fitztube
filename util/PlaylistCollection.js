// Playlist data from JSON file
// [data structures]
import Playlist from "./Playlist";

export default class PlaylistCollection {
    
    static state = {
        playlists: [],
        selected: undefined
    }
    
    static saveCollection() {
        if(this.state.selected != undefined) {
            localStorage.setItem('selected-playlist', JSON.stringify(this.state.selected));
        }
        localStorage.setItem('playlist-data', JSON.stringify(this.state.playlists));
    }
    
    static loadCollection() {
        try {
            this.state.selected = JSON.parse(localStorage.getItem('selected-playlist'));
            let loadedData = JSON.parse(localStorage.getItem('playlist-data'));
            if(loadedData == undefined) {
                return;
            }
            let playlists = [];
            for(var i=0; i < loadedData.length; i++) {
                let playlist = new Playlist(loadedData[i].state.name)
                playlist.state.videos = loadedData[i].state.videos;
                playlists.push(playlist);
            }
            this.state.playlists = playlists;
        }
        catch (error) {
            console.error(error)
            localStorage.removeItem('selected-playlist')
            localStorage.setItem('selected-playlist', Playlist.state.playlists[0])
        }
    }

    static setSelected(playlist) {
        this.state.selected = playlist;
        this.saveCollection();
    }
    
    static addPlaylist = (playlist => {
        if(playlist == undefined) {
            return
        }
        this.state.playlists.push(playlist)
        this.saveCollection();
    })

    static printCollection = ( _ => {
        console.log(this.state)
    })

    static find(name) {
        return this.state.playlists.find(playlist => playlist.state.name == name);
    }
}