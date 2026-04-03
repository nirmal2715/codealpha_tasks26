const songs = [
{
artist: "Relax Music",
src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
cover: "https://picsum.photos/id/237/300/300"
},
{
artist: "Chill Beats",
src: "./songs/song2.mp3.mp3",
cover: "https://picsum.photos/id/238/300/300"
},
{
artist: "Focus Music",
src: "./songs/song3.mp3.mp3",
cover: "https://picsum.photos/id/239/300/300"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("play");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

function loadSong(song){

title.textContent = song.title;
artist.textContent = song.artist;
cover.src = song.cover;

audio.src = song.src;
audio.load();

}

loadSong(songs[currentSong]);

function playPause(){

if(audio.paused){
audio.play();
playBtn.innerHTML = "⏸";
}else{
audio.pause();
playBtn.innerHTML = "▶";
}

}

function nextSong(){

currentSong = (currentSong + 1) % songs.length;

loadSong(songs[currentSong]);
audio.play();

}

function prevSong(){

currentSong = (currentSong - 1 + songs.length) % songs.length;

loadSong(songs[currentSong]);
audio.play();

}

audio.addEventListener("timeupdate",()=>{

const currentTime = audio.currentTime;
const totalTime = audio.duration;

progress.value = (currentTime / totalTime) * 100;

current.textContent = formatTime(currentTime);
duration.textContent = formatTime(totalTime);

});

progress.addEventListener("input",()=>{

audio.currentTime = (progress.value / 100) * audio.duration;

});

function formatTime(time){

let minutes = Math.floor(time / 60);
let seconds = Math.floor(time % 60);

if(seconds < 10){
seconds = "0" + seconds;
}

return minutes + ":" + seconds;

}

audio.addEventListener("ended", nextSong);

volume.addEventListener("input",()=>{

audio.volume = volume.value;

});