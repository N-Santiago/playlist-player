class Playlist {
    static all = []

    constructor(playlist) {
        this.id = playlist.id
        this.name = playlist.name
        this.description = playlist.description
        this.tracks = playlist.tracks
        Playlist.all.push(this)
    }

    renderPlaylist() { 
        return `<div class="playlist-container" id="playlist-${this.id}">
                    <div class="playlist-header">
                        <h3><a data-id='${this.id}' class="my-0 font-weight-normal">${this.name}</a></h3>
                        <h4><a data-id='${this.id}' class="my-0 font-weight-normal">${this.description}</a><h4>
                    </div>    
                    <div class="playlist-body">
                        <ul id="tracks-list" class="tracks-list"></ul>
                    </div>
                </div>`                               
    }

    renderTracks() {
        // let trackList = document.querySelector(`#playlist-${this.id} #tracks-list`) 
        // debugger
        this.tracks.forEach(track => {
            main().innerHTML += `
            <li id="track-${track.id}">
            ${track.title} - ${track.artist} - Genre: ${track.genre}</small><button class="delete-btn" data-action="delete" id="delete-btn"> X </button></li>`
        })
    }

}