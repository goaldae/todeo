const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

const setVolumeIcon = (value) => {
  if (value >= 0.5) {
    return '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.1) {
    return '<i class="fas fa-volume-down"></i>';
  } else if (value == 0) {
    return '<i class="fas fa-volume-mute"></i>';
  }
};

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    //음소거일때
    if (videoPlayer.volume == 0) {
      videoPlayer.muted = false;
      volumeBtn.innerHTML = setVolumeIcon(0.5);
      videoPlayer.volume = 0.5;
      volumeRange.value = videoPlayer.volume;
    } else {
      videoPlayer.muted = false; //Read only가 아니라 값을 바꿀 수 있음
      volumeBtn.innerHTML = setVolumeIcon(videoPlayer.volume);
      volumeRange.value = videoPlayer.volume;
    }
  } else {
    //소리가 날때
    videoPlayer.muted = true;
    volumeBtn.innerHTML = setVolumeIcon(0);
    volumeRange.value = 0;
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozExitFullscreen) {
    document.mozExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  //호환성 문제로 안된다면 앞에 webkit을 붙이면 됨
  fullScrBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrBtn.addEventListener("click", goFullScreen);
  fullScrBtn.removeEventListener("click", exitFullScreen);
}

function goFullScreen() {
  //paused처럼 상태를 boolean으로 체그할 수 없음
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullscreen) {
    videoContainer.mozRequestFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScrBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrBtn.removeEventListener("click", goFullScreen);
  fullScrBtn.addEventListener("click", exitFullScreen);
}

const formatDate = (secondss) => {
  const secondsNumber = parseInt(secondss, 10);
  let hour = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hour * 3600) / 60);
  let seconds = Math.floor(secondsNumber % 60);

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hour}:${minutes}:${seconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime)); //소수점을 방지하기위해
}

function setTotalTime() {
  const currentTime = formatDate(videoPlayer.duration);
  totalTime.innerHTML = currentTime;
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleDrag(event) {
  const {
    target: { value },
  } = event;
  videoPlayer.volume = value;
  volumeBtn.innerHTML = setVolumeIcon(value);
  if (value == 0) videoPlayer.muted = true;
  else videoPlayer.muted = false;
}

function init() {
  videoPlayer.volume = 0.5;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
}

if (videoContainer) {
  init();
}
