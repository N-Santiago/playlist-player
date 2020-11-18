class Playlist {
    constructor(playlist) {
        this.id = playlist.id
        this.name = playlist.name
        this.description = playlist.description
        this.tracks = playlist.tracks
        // Playlist.array.push(this)
    }

    renderPlaylist() { 
        return `<div class="playlist-container" id="playlist-${this.id}">
                    <div class="playlist-header">
                        <a href='#' data-id='${this.id}' class="my-0 font-weight-normal">${this.name}</a><br>
                        <a href='#' data-id='${this.id}' class="my-0 font-weight-normal">${this.description}</a><br>
                        <button class="playlist-btn" id="add-track" data-id="${this.id}">Add Track</button>
                    </div>    
                    <div class="playlist-body">
                        <ul id="tracks-list" class="tracks-list"></ul>
                    </div>
                </div>`                               
    }

    renderTracks() {
        // let trackList = document.querySelector(`#playlist-${this.id} #tracks-list`) 
        this.tracks.forEach(track => {
            main.innerHTML += `
            <li id="track-${track.id}">
            <small>${this.title} - ${this.artist} - Genre: ${this.genre}</small><button class="delete-btn" data-action="delete" id="delete-btn"> X </button></li>`
        })
    }

}