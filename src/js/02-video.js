
import Vimeo from "@vimeo/player"
import "@vimeo/player/dist/player"
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_VIDEO = 'videoplayer-current-time'

const saveVideoTime= throttle(
    data => localStorage.setItem(LOCALSTORAGE_VIDEO, data.seconds),
    1000
  );

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then();
  player.on('timeupdate', saveVideoTime);






