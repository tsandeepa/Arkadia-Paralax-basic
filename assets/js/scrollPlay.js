

let playBt = document.getElementById('vp_play');
let pauseBt = document.getElementById('vp_pause');

//coaster section description boxes

let coaster_guide = document.querySelector('.coaster-guide');
let vsec_1 = document.getElementById('vsec_1');
let vsec_2 = document.getElementById('vsec_2');

//section play buttons
// let vp_btn_1 = document.getElementById('vp_btn_1');
// let vp_btn_2 = document.getElementById('vp_btn_2');

let vp_bar = document.getElementById('vp_bar');

let vbt_ph = document.querySelector('.vbt-ph');
let vp_play_mobile = document.getElementById('vp_play_mobile');



vp_play_mobile.addEventListener('click', () => {
  f6_r1_mobile.play()

})

let videoTimer;
let video_progres;

setInterval(() => {
  video_progres = (f6_r1.currentTime / 13) * 100
  // console.log(Math.round(video_progres));
  vp_bar.style.width = `${Math.round(video_progres)}%`
}, 100);


const playVideo = () => {
  f6_r1.play()
  coaster_guide.classList.add('d-none')

  videoTimer = setInterval(() => {
    let playTime = (Math.round(f6_r1.currentTime));
    // console.log(playTime);
    if (playTime == 1) {
      vbt_ph.classList.add('hide')
    }


    if (playTime == 4) {
      f6_r1.pause()
      clearInterval(videoTimer);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.remove('d-none')
      vsec_2.classList.add('d-none')
    }
    if (playTime == 10) {
      f6_r1.pause()
      clearInterval(videoTimer);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.add('d-none')
      vsec_2.classList.remove('d-none')
    }
    if (playTime == 13) {
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.remove('d-none')
      vsec_2.classList.remove('d-none')

      clearInterval(videoTimer);
    }
  }, 1050);
}



playBt.addEventListener('click', playVideo)

// vp_btn_1.addEventListener('click', playVideo)

// vp_btn_2.addEventListener('click', playVideo)

coaster_guide.addEventListener('click', playVideo)

// pauseBt.addEventListener('click', () => {
//   f6_r1.pause()
//   clearInterval(videoTimer);

// })

