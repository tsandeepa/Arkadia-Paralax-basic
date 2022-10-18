

let playBt = document.getElementById('vp_play');
let pauseBt = document.getElementById('vp_pause');

//coaster section description boxes

let coaster_guide = document.querySelector('.coaster-guide');
let vsec_1 = document.getElementById('vsec_1');
let vsec_2 = document.getElementById('vsec_2');
let vsec_3 = document.getElementById('vsec_3');
let vsec_4 = document.getElementById('vsec_4');

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


    if (playTime == 3) {
      f6_r1.pause()
      clearInterval(videoTimer);
      clearInterval(video_progres);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.remove('d-none')
      vsec_2.classList.add('d-none')
      vsec_3.classList.add('d-none')
      vsec_4.classList.add('d-none')
    }
    if (playTime == 6) {
      f6_r1.pause()
      clearInterval(videoTimer);
      clearInterval(video_progres);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.add('d-none')
      vsec_2.classList.remove('d-none')
      vsec_3.classList.add('d-none')
      vsec_4.classList.add('d-none')
    }
    if (playTime == 8) {
      f6_r1.pause()
      clearInterval(videoTimer);
      clearInterval(video_progres);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.add('d-none')
      vsec_2.classList.add('d-none')
      vsec_3.classList.remove('d-none')
      vsec_4.classList.add('d-none')
    }
    if (playTime == 11) {
      f6_r1.pause()
      clearInterval(videoTimer);
      clearInterval(video_progres);
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.add('d-none')
      vsec_2.classList.add('d-none')
      vsec_3.classList.add('d-none')
      vsec_4.classList.remove('d-none')
    }

    if (playTime == 13) {
      coaster_guide.classList.remove('d-none')
      vsec_1.classList.remove('d-none')
      vsec_2.classList.remove('d-none')
      vsec_3.classList.remove('d-none')
      vsec_4.classList.remove('d-none')
      clearInterval(video_progres);
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


const f7_base_ritual = document.getElementById('f7_Untitled_Artwork_4')
const btn_ritual = document.getElementById('btn_ritual')

btn_ritual.addEventListener('click', () => {
  f7_base_ritual.classList.toggle('f7-ritual-started')
})

//coming soon animatons

const sec_nav_right = document.querySelector('.navigation')
const view_coming_soon = document.querySelector('.view-coming-soon')
const f8_coming_soon = document.getElementById('frame-08-soon')
const btn_back_home = document.getElementById('btn_back_home')

view_coming_soon.addEventListener('click', () => {
  f8_coming_soon.classList.remove('hide')
  sec_nav_right.classList.add('hide');
})


btn_back_home.addEventListener('click', () => {
  f8_coming_soon.classList.add('hide')
  sec_nav_right.classList.remove('hide');
})