window.onload = sortSideBarBG;

const arakiDoodles = [
    'img/bruno.png',
    'img/diego.png',
    'img/giorno.png',
    'img/johnny.png',
    'img/jolyne.png',
    'img/jolyne2.png',
    'img/josuke.png',
    'img/killerqueen.png',
    'img/lucy.png',
    'img/pucci.png',
    'img/rohan.png',
    'img/weather.png',
    'img/yasuho.png',
    'img/yasuho2.png',
    'img/yukako.png',
];

function sortSideBarBG() {
    const i = Math.floor(Math.random() * arakiDoodles.length);
    document.getElementById('sidebar').style.backgroundImage = `url(${arakiDoodles[i]})`;
}