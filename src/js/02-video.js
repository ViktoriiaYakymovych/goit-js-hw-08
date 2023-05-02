import "../css/common.css";

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

const onTimeUpdate = function () {
    player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(CURRENT_TIME, seconds);
    })
    // .catch(function(error) {
    //     alert('Ooops, error!')
    // });
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));
