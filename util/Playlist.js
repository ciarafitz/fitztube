// Add, remove, view actions of the playlist 
// manages data
// [data structure]

import PlaylistCollection from "./PlaylistCollection";

export default class Playlist {
    constructor(name) {
      this.state = {
        videos: [],
        name: name
      };
    }
  
    addVideo = (video => {
        if(this.find(video.id) != undefined) {
            return
        }
        this.state.videos.push(video)
        PlaylistCollection.saveCollection();
    })

    removeVideo = (video => {
        this.state.videos = this.state.videos.filter(v => v.id != video.id )
        PlaylistCollection.saveCollection();
    })

    swapVideos(vid1, vid2) {
        console.log("switching!")
        const vid1_index = this.find_index(vid1.id);
        const vid2_index = this.find_index(vid2.id);

        if(vid1_index == undefined || vid2_index == undefined) {
            return;
        }

        const temp = this.state.videos[vid1_index];
        this.state.videos[vid1_index] = this.state.videos[vid2_index];
        this.state.videos[vid2_index] = temp;
        
        PlaylistCollection.saveCollection();
    }

    printPlaylist = ( _ => {
        console.log("Playlist: " + this.state.name)
        console.log(this.state.videos)
    })

    find(id) {
        return this.state.videos.find(video => video.id == id);
    }

    find_index(id) {
        for(var i=0; i < this.state.videos.length; i++){
            if(this.state.videos[i].id == id) {
                return i;
            }
        }
        return undefined
    }
}
