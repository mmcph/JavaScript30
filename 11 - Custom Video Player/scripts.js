let player = Array.from(document.getElementsByClassName('player__video'))[0];
let playBtn = document.getElementById('play-button');
let volSlider = document.getElementById('vol-slider');
let speedSlider = document.getElementById('speed-slider');
let progress = Array.from(document.getElementsByClassName('progress'))[0];
let progressFilled = Array.from(document.getElementsByClassName('progress__filled'))[0];
let ffwd = document.getElementById('ffwd');
let rewind = document.getElementById('rwd');

player.addEventListener('click', playToggle);
playBtn.addEventListener('click', playToggle);
player.addEventListener('play', toggleBtn);
player.addEventListener('pause', toggleBtn);
ffwd.addEventListener('click', vidSkip);
rwd.addEventListener('click', vidSkip);
volSlider.addEventListener('change', updateSlider);
speedSlider.addEventListener('change', updateSlider);
volSlider.addEventListener('mousemove', updateSlider);
speedSlider.addEventListener('mousemove', updateSlider);
player.addEventListener('playing', updateProgress);
progress.addEventListener('mousedown', updateTime);

function playToggle() {
  if(player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function toggleBtn() {
const icon = this.paused ? '►' : '❚ ❚';
playBtn.innerText = icon;
}

function updateSlider(e) {
  if (e.target.id === 'speed-slider') {
    player.playbackRate = this.value;
  } else {
    player.volume = this.value;
  }
}

function vidSkip() {
  player.currentTime += parseFloat(this.dataset.skip);

}

function updateProgress() {
  window.setInterval(updateProg, 500);
  function updateProg() {
    if (player.paused) {
      return
    }
    let vidTime = player.currentTime / player.duration;
    progressFilled.style.flexBasis = `${vidTime * 100}%`;
  }
}

function updateTime(e) {
  progress.addEventListener('mousemove', updateTimeForReal);
  progress.addEventListener('mouseup', stopScan);
}

function updateTimeForReal(e) {
  let percentPlayed = e.offsetX / 640;
  player.currentTime = player.duration * percentPlayed;
  progressFilled.style.flexBasis = `${percentPlayed * 100}%`;
  progress.addEventListener('mouseup', stopScan);
}

function stopScan(e) {
  progress.removeEventListener('mousemove', updateTimeForReal);
  let percentPlayed = e.offsetX / 640;
  player.currentTime = player.duration * percentPlayed;
  progressFilled.style.flexBasis = `${percentPlayed * 100}%`;
}