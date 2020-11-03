const BASE_URL = 'https://localhost:3000'
const TRACKS_URL = `${BASE_URL}/api/v1/tracks/`

window.addEventListener('load', () => {
    getTracks()
})

const main = () => {
    return document.querySelector('main')
}

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