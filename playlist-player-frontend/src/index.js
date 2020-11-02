const BASE_URL = 'https://localhost:3000'
const TRACKS_URL = `${BASE_URL}/api/v1/tracks/`

fetch('https://localhost:3000/api/v1/tracks/', {
    method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }
    })
        .then((response) => {
        console.log(response.json().then(
        (data) => { console.log(data) }
    ));
});

    