import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const STORAGE_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function({seconds}) {
    localStorage.setItem(STORAGE_TIME_KEY, JSON.stringify(seconds));
    const saveData = localStorage.getItem(STORAGE_TIME_KEY);
    const parseData = JSON.parse(saveData);
 };

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY));






