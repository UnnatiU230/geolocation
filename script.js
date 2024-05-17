
const apiKey = '09538ca05cff43d5992ca4e468afd57b';
const apiURL = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('latitude').textContent = data.latitude;
        document.getElementById('longitude').textContent = data.longitude;
        document.getElementById('timezone').textContent = data.time_zone.name;
        document.getElementById('city').textContent = data.city;
                document.getElementById('country').textContent = data.country_name;
                document.getElementById('state').textContent = data.state_prov;
    })
    .catch(error => {
        console.error('Error fetching the geolocation data:', error);
    });
