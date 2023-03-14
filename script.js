//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip(touristSpotsNames) {
  return touristSpotsNames.replace(/^(a |the |an )/i, '').trim();
}

const sortedtouristSpotsNames = touristSpots.slice().sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#touristSpots').innerHTML =
  bands
    .map(touristSpots => `<li>${touristSpots}</li>`)
    .join('');

document.querySelector('#touristSpotsSorted').innerHTML =
  sortedBands
    .map(touristSpots => `<li>${touristSpots}</li>`)
    .join('');
