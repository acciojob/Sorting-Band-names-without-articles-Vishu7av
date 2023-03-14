//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.slice().sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  bands
    .map(band => `<li>${band}</li>`)
    .join('');

document.querySelector('#bandsSorted').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
