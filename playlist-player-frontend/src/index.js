const BASE_URL = 'https://localhost:3000'
const TRACKS_URL = `${BASE_URL}/api/v1/tracks/`

window.addEventListener('load', () => {
    addTrackForm()
    getTracks()
})

const main = () => {
    return document.querySelector('main')
}

// function clickToLinks() {
//     let playerLinks = document.querySelectorAll('.card-header a')
//     playerLinks.forEach(track => {
//         player.addEventListener('click', getTracks)
//     })
//     document.querySelectorAll('#add-track').forEach(track => track.addEventListener('click', addTrackForm))
// }

const getTracks = () => {
    fetch('http://localhost:3000/api/v1/tracks')
    .then(r => r.json())
    .then(data => renderTracks(data))
}

const renderTracks = (tracksData) => {
    tracksData.forEach(track => renderTrackCard(track))
}

const renderTrackCard = (trackObj) => {
    let trackCard = document.createElement('div')
    trackCard.className = "card"
    trackCard.dataset.id = trackObj.id
    trackCard.innerHTML = `
      <p>${trackObj.title} - ${trackObj.artist} - Genre: ${trackObj.genre}</p>
    `
    main().appendChild(trackCard)
}

function addTrackForm() {
    let trackForm = document.getElementById('track-form')
    let html = `
        <form>
            <label>Title:</label>
            <input type="text" id="title">
            <label>Artist:</label>
            <input type="text" id="artist">
            <label>Genre:</label>
            <input type="text" id="genre">
            <input type="submit">
        </form>
    `
    trackForm.innerHTML = html 
    document.querySelector('form').addEventListener('submit', createTrack)
}

function clearTrackForm() {
    let trackFormDiv = document.getElementById('track-form')
    trackFormDiv.innerHTML = ""
}

function createTrack() {
    event.preventDefault()
    const track = {
        Title: document.getElementById('title').value,
        Artist: document.getElementById('artist').value,
        Genre: document.getElementById('genre').value,
    }
    fetch(BASE_URL+"/api/v1/tracks", {
        method: "POST",
        body: JSON.stringify(track),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }) 
    .then(resp => resp.json())
    .then(track => {
    renderTrackCard(track)
    // attachClickToLinks()
    clearTrackForm()
    })
}

    