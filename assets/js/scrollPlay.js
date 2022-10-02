const registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  const scrollVideo = () => {
    if (video.duration) {
      const percentScrolled = 0.1;

      video.currentTime = video.duration * percentScrolled;
    }
    requestAnimationFrame(scrollVideo);
  }
  requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");