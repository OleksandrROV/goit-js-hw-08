import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY_LOCALSTORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
  localStorage.setItem(KEY_LOCALSTORAGE, data.seconds);
}

function updateTime() {
  const seconds = localStorage.getItem(KEY_LOCALSTORAGE);
  if (seconds) {
    player.setCurrentTime(seconds);
  }
}
updateTime();
