const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

// custom-playerを有効にする
media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauerMedia);
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);
media.addEventListener('timeupdate', setTime);
timerWrapper.addEventListener('click', jumpMedia);

function playPauerMedia() {
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);

  if (media.paused) {
    play.setAttribute('data-icon', 'u');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
  }
}

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon', 'P');

  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

let intervalFwd;
let intervalRwd;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');

  // 巻き戻し中だった場合
  if (rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd)
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  // 早送り中だった場合
  if (fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

function setTime() {
  let hours = Math.floor(media.currentTime / 60 / 60);
  let minutes = Math.floor(media.currentTime / 60 - hours * 60);
  let seconds = Math.floor(media.currentTime - minutes * 60);
  let hourValue;
  let minuteValue;
  let secondValue;

  if (hours < 10) {
    hourValue = '0' + hours;
  } else {
    hourValue = hours;
  }

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  let mediaTime = hourValue + ':' + minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  let barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = barLength + 'px';
}

// 未完成
function jumpMedia(e) {
  let bar = timerWrapper.getBoundingClientRect()
  let start = bar.x;
  let end = bar.x + bar.width;

  // start=e.xの場合0になる
  // end=e.xの場合media.durationになる
  console.log(`start: ${start}, end: ${end}`)
  console.log(e.x)

  // そして、イベントのxを取得して、上記のxとx＋widthから計算して、
  // その位置に合わせてmedia.currentTimeを更新
}
