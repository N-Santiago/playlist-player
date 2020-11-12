class Track {
    constructor(track) {
        this.id = track.id
        this.title = track.title
        this.artist = track.artist 
        this.genre = track.genre
    }

    renderTrack() {
         return `
         <li id="track-container> ${this.title} - ${this.artist} - Genre: ${this.genre} <button class="delete-btn" data-action="delete" id="delete-btn"> X </button></li>`
    }

}

