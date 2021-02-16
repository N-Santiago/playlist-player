const BASE_URL = 'http://localhost:3000'
const TRACKS_URL = `${BASE_URL}/tracks/`
const PLAYLISTS_URL = `${BASE_URL}/playlists/`

window.addEventListener('load', () => {
    getPlaylists()
    addTrackForm()
    let all = Playlist.all;
    all.forEach(val => createOption(val))
})

const main = () => {
    return document.querySelector('main')
}

// function clickToLinks() {
//         let playerLinks = document.querySelectorAll('playlist-container')
//         playerLinks.forEach(playlists => {
//             player.addEventListener('click', getplaylists())
//         })
//         // document.querySelectorAll('#add-track').forEach(track => track.addEventListener('click', addTrackForm))
//         // document.querySelectorAll('#delete-track').forEach(track => track.addEventListener('click', removeTrackButton))             
//     }
    

function getPlaylists() {
    // clearForm()
    fetch(BASE_URL+"/playlists")
    .then(resp => resp.json())
    .then(playlists => {
        playlists.map(playlist => { 
            let p = new Playlist(playlist)
            main().innerHTML += p.renderPlaylist() 
            p.renderTracks()
        })
    })
    // attachClickToLinks()
}

function addTrackForm() {
    let trackForm = document.getElementById('track-form')
    let html = `
        <h3>Add Song</h3>
        <form>
            <label>Title:</label>
            <input type='text' id='title'>
            <label>Artist:</label>
            <input type='text' id='artist'>
            <label>Genre:</label>
            <input type='text' id='genre'>
            <label>Playlist:</label>
            <select id='menu' class='playlist-dropdown'>
            </select>
            <input type='submit'>
        </form>
    `
    trackForm.innerHTML = html
    // document.getElementById('menu').addEventListener('click', openMenu)
    document.querySelector('form').addEventListener('submit', createTrack)
}

function createOption(val) {
    let option = document.createElement("option");
    let select = document.getElementsByClassName("playlist-dropdown")[0];
    option.value = val.name; 
    option.text = val.name.charAt(0).toUpperCase() + val.name.slice(1);
    select.appendChild(option);
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
        let t = new Track(track)
        let tracksOl = document.querySelector('track-container')
        tracksOl.innerHTML += t.renderTrack()
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

