const BASE_URL = "https://localhost:3000/v1/"
const TRACKS_URL = `${BASE_URL}/tracks/{id}`

fetch('https://localhost:3000/v1/tracks/{id}', {
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

    