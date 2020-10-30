const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/tracks`

document.addEventListener('DOMContentLoaded', () => {
    getTracks()
  })
  
  const main = () => {
    return document.querySelector('main')
  }
  
  const getTrainers = () => {
    fetch('http://localhost:3000/tracks')
    .then(r => r.json())
    .then(tracks => renderTracks(tracks))
  }

  const renderTracks = (tracksData) => {
    tracksData.forEach(track => document.log(track))
  }
