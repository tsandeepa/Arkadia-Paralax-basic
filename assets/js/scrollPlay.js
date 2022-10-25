

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

const f6_info_view = document.querySelector('.f6_info_view')
const vp_view = document.querySelector('.vp-view')
const mb_video_thumnail = document.querySelector('.mb_video_thumnail')

const f6_iv_1 = document.querySelector('.f6_iv_1')
const f6_iv_2 = document.querySelector('.f6_iv_2')
const f6_iv_3 = document.querySelector('.f6_iv_3')
const f6_iv_4 = document.querySelector('.f6_iv_4')


//mobile video

let videoTimer_mobile;

vp_play_mobile.addEventListener('click', () => {

  mb_video_thumnail.classList.add('d-none')
  f6_r1_mobile.play()

  f6_info_view.classList.add('d-none')
  f6_iv_1.classList.add('d-none');
  f6_iv_2.classList.add('d-none');
  f6_iv_3.classList.add('d-none');
  f6_iv_4.classList.add('d-none');


  videoTimer_mobile = setInterval(() => {
    let playTime = (Math.round(f6_r1_mobile.currentTime));

    if (playTime == 1) {
      vp_view.classList.add('hide')
    }

    if (playTime == 3) {
      f6_info_view.classList.remove('d-none')

      f6_iv_1.classList.remove('d-none');
      f6_iv_2.classList.add('d-none');
      f6_iv_3.classList.add('d-none');
      f6_iv_4.classList.add('d-none');
    }


    if (playTime == 6) {
      f6_iv_1.classList.add('d-none');
      f6_iv_2.classList.remove('d-none');
      f6_iv_3.classList.add('d-none');
      f6_iv_4.classList.add('d-none');
    }

    if (playTime == 8) {
      f6_iv_1.classList.add('d-none');
      f6_iv_2.classList.add('d-none');
      f6_iv_3.classList.remove('d-none');
      f6_iv_4.classList.add('d-none');
    }

    if (playTime == 11) {
      f6_iv_1.classList.add('d-none');
      f6_iv_2.classList.add('d-none');
      f6_iv_3.classList.add('d-none');
      f6_iv_4.classList.remove('d-none');
    }

    if (playTime == 13) {
      vp_view.classList.remove('hide')
      f6_iv_1.classList.remove('d-none');
      f6_iv_2.classList.remove('d-none');
      f6_iv_3.classList.remove('d-none');
      f6_iv_4.classList.remove('d-none');
      clearInterval(videoTimer_mobile);

    }




  }, 1050)


})

const cgs_continue = document.querySelector('.cgs_continue');
const cgs_start = document.querySelector('.cgs_start');
const ended_next_section = document.querySelector('.ended-next-section');

//dektop video------
let videoTimer;
let video_progres;

setInterval(() => {
  video_progres = (f6_r1.currentTime / 13) * 100
  // console.log(Math.round(video_progres));
  vp_bar.style.width = `${Math.round(video_progres)}%`
}, 100);


const playVideo = () => {
  ended_next_section.classList.add('hide')

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
      cgs_continue.classList.remove('hide')

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
      vbt_ph.classList.remove('hide')
      cgs_continue.classList.add('hide')
      ended_next_section.classList.remove('hide')
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
const f7_bg_paper_reveal = document.querySelector('.f7_bg_paper_reveal')

btn_ritual.addEventListener('click', () => {
  f7_base_ritual.classList.toggle('f7-ritual-started')
  f7_bg_paper_reveal.classList.toggle('no-ritual')
})

//coming soon animatons

const sec_nav_right = document.querySelector('.navigation')
const view_coming_soon = document.querySelectorAll('.nav-menu__sec')
const f8_coming_soon = document.getElementById('frame-08-soon')
const btn_back_home = document.getElementById('btn_back_home')

// view_coming_soon.forEach((item) => {
//   item.addEventListener('click', () => {
//     sec_nav_right.classList.add('hide');
//     console.log(f8_coming_soon);
//     f8_coming_soon.classList.remove('hide')
//   })
// })




btn_back_home.addEventListener('click', () => {
  f8_coming_soon.classList.add('hide')
  sec_nav_right.classList.remove('hide');
})

const sm_footer = document.getElementById("sm_footer")

const footerMain = document.querySelector('footer')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    if (intersecting) {
      footerMain.classList.add('foot-sm-fade-in')
    } else {
      footerMain.classList.remove('foot-sm-fade-in')
    }
  })
}, { threshold: 0.7 })

observer.observe(sm_footer)



//mobile ritual event
const sf_img_07_initial = document.querySelector('.sf-img-07-initial')
const sm_f7_btn_ritual = document.getElementById('sm_f7_btn_ritual')

sm_f7_btn_ritual.addEventListener('click', () => {
  sf_img_07_initial.classList.toggle('sm-07-started')
})
