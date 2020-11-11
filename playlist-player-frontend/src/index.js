const BASE_URL = 'http://localhost:3000'
const TRACKS_URL = `${BASE_URL}/tracks/`

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
//     document.querySelectorAll('#delete-track').forEach(track => track.addEventListener('click', removeTrackButton))             
// }

const getTracks = () => {
    fetch('http://localhost:3000/tracks')
    .then(r => r.json())
    .then(data => renderTracks(data))
}

const renderTracks = (tracksData) => {
    tracksData.forEach(track => renderTrackCard(track))
}

function renderTrackCard(trackObj) {
    let trackCard = document.createElement('div')
    trackCard.className = "card"
    trackCard.dataset.id = trackObj.id
    trackCard.innerHTML = `
      <p>${trackObj.title} - ${trackObj.artist} - Genre: ${trackObj.genre} <button class="delete-btn" data-action="delete" id="delete-btn"> X </button></p>
    `
    main().appendChild(trackCard)
    // document.querySelector('btn.delete-btn').addEventListener('click', (e) => {
    //     e.preventDefault()
    //     // removeTrack(e)
    // })
}

function addTrackForm() {
    let trackForm = document.getElementById('track-form')
    let html = `
        <form>
            <label>Title:</label>
            <input type='text' id='title'>
            <label>Artist:</label>
            <input type='text' id='artist'>
            <label>Genre:</label>
            <input type='text' id='genre'>
            <input type='submit'>
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
        title: document.getElementById('title').value,
        artist: document.getElementById('artist').value,
        genre: document.getElementById('genre').value,
    }
    fetch(BASE_URL+"/tracks", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(track)
    }) 
    .then(resp => resp.json())
    .then(track => {
    renderTrackCard(track)
    // attachClickToLinks()
    clearTrackForm()
    })
}

// function removeTrack() {
    // event.preventDefault()
    // clearTrackForm()
    // let id = e.target.dataset.id 
    // fetch(BASE_URL+`/tracks/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(track)
    // })
    // .then(e.target.parentElement.remove())
// }   