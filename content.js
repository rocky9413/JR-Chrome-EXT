// window.addEventListener('load', (event) => {
//     let myAudio = new Audio(chrome.runtime.getURL("./ambient-music/LA13.mp3"));
//     myAudio.play();
// });

var API_KEY = "13680593-f0064f650b2cbf8df89fdde1d";
var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent("motivational");
let data1;
fetch(URL)
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   data1 = JSON.parse(JSON.stringify(myJson));
 });

 let i = 0;
 setInterval(() => {
    if(i === 19) i = 0;
    document.body.style.backgroundImage = `url(${data1.hits[i++].largeImageURL})`;
}, 4000);

