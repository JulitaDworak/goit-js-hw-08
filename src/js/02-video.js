
import Vimeo from "@vimeo/player"
import "@vimeo/player/dist/player"

const LOCALSTORAGE_VIDEO = 'videoplayer-current-time'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('play', function() {
    console.log('played the video!');
});


const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('timeupdate', function(data) {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
    // data is an object containing properties specific to that event
}
);

// const currentVideoTime = player.setCurrenrTime(currentTime)
// console.log(currentVideoTime);

const playertime = localStorage.setItem("time", data.seconds)

console.log(playertime);
// localStorage.setItem("videoplayer-current-time",JSON.stringify(videoplayer-current-time) )

// const videoCurrentTime = localStorage.getItem("videoplayer-current-time")

// const time ={
