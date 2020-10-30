const BASE_URL = "https://api.spotify.com/v1/"
const TRACKS_URL = `${BASE_URL}/tracks/{id}`

fetch('https://api.spotify.com/v1/tracks/{id}', {
    method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
        }
    })
        .then((response) => {
        console.log(response.json().then(
        (data) => { console.log(data) }
    ));
});