import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const setDataToStorage = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds.toString());
}, 1000);

player.on('timeupdate', function (data) {
  setDataToStorage(data.seconds);
});

player
  .setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(error.message);
        break;

      default:
        console.log(error.message);
        break;
    }
  });
