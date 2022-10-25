const laoder = document.querySelector('.loading-view')

const arkadia_audio = document.getElementById('arkadia_audio')
const audio_mute = document.getElementById('audio_mute')
const click_start_popup = document.querySelector('.click_start_popup')

window.addEventListener('load', () => {
  laoder.classList.add('hide')

})

const playBgTheme = () => {
  arkadia_audio.volume = 0.08
  arkadia_audio.play()
  arkadia_audio.loop = true;
}

document.addEventListener("DOMContentLoaded", function () {
  f1_logo_lg.classList.add('anim-fadeIn')
  playBgTheme()
});

click_start_popup.addEventListener('click', () => {
  click_start_popup.classList.add('hide')
  playBgTheme()

})



audio_mute.addEventListener('click', () => {
  console.log(arkadia_audio.muted);
  if (arkadia_audio.muted) {
    arkadia_audio.muted = false
    audio_mute.classList.remove('muted')
  } else {
    arkadia_audio.muted = true
    audio_mute.classList.add('muted')
  }
})


//side menu
const btn_menu = document.querySelector('.btn-menu')
const nav_menu = document.querySelector('.nav-menu')
const btn_menu_close = document.querySelector('.btn-menu-close')
const menu_bg = document.querySelector('.menu-bg')
const menu_sec = document.querySelector('.nav-menu__sec')

btn_menu.addEventListener('click', () => {
  nav_menu.classList.toggle('slide-in')
  menu_bg.classList.toggle('slide-in')
})

btn_menu_close.addEventListener('click', () => {
  nav_menu.classList.remove('slide-in')
  menu_bg.classList.remove('slide-in')

})

menu_bg.addEventListener('click', () => {
  nav_menu.classList.remove('slide-in')
  menu_bg.classList.remove('slide-in')

})

menu_sec.addEventListener('click', () => {
  nav_menu.classList.remove('slide-in')
  menu_bg.classList.remove('slide-in')

})





//Page Nav -----------------------------------------
const windowHeight = window.innerHeight;
const bodyHeight = document.querySelector('body').offsetHeight;
const prgBar = document.querySelector('.prg-bar');
//navigation section each height
const li_ph_1 = document.querySelector('.li_ph_1');
const li_ph_2 = document.querySelector('.li_ph_2');
const li_ph_3 = document.querySelector('.li_ph_3');
const li_ph_4 = document.querySelector('.li_ph_4');
const li_ph_5 = document.querySelector('.li_ph_5');
const li_ph_6 = document.querySelector('.li_ph_6');
const li_ph_7 = document.querySelector('.li_ph_7');


const li_bx_1 = document.getElementById('li_bx_1');
const li_bx_2 = document.getElementById('li_bx_2');
const li_bx_3 = document.getElementById('li_bx_3');
const li_bx_4 = document.getElementById('li_bx_4');
const li_bx_5 = document.getElementById('li_bx_5');
const li_bx_6 = document.getElementById('li_bx_6');
const li_bx_7 = document.getElementById('li_bx_7');




// frame 01--------------------------------------

let frame01 = document.getElementById('frame-01')
//fade assets
let f1_logo_lg = document.getElementById('f1_logo_lg')

let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let space_ship = document.getElementById('space_ship')
let two_ships = document.getElementById('two_ships')
let van = document.getElementById('van')
let park = document.getElementById('park')
let clouds = document.getElementById('clouds')
let sc_val = document.getElementById('sc-val')


// frame 02--------------------------------------

let frame02 = document.getElementById('frame-02')

let f2_sky_full = document.getElementById('f2-sky-full')
let f2_clouds_white = document.getElementById('f2-clouds-white')
let f2_mountains = document.getElementById('f2-mountains')
let f2_big_plannet = document.getElementById('f2-big-plannet')
let f2_wheel = document.getElementById('f2-wheel')
let f2_city_tower_home = document.getElementById('f2-city-tower-home')
let f2_fog_white_middle = document.getElementById('f2-fog-white-middle')
let f2_entrance_center = document.getElementById('f2-entrance-center')
let f2_entrance_gate = document.getElementById('f2-entrance-gate')
let f2_flags = document.getElementById('f2-flags')
let f2_glow_inside = document.getElementById('f2_glow_inside')
let f2_entrance_right = document.getElementById('f2-entrance-right')
let f2_front_lights = document.getElementById('f2-front-lights')
let f2_front_tower = document.getElementById('f2-front-tower')

//frame 03 ------------------------
let frame03 = document.getElementById('frame-03')

let f3_1_bg = document.getElementById('f3_1_bg')
let f3_2_bg = document.getElementById('f3_2_bg')
let f3_3_flash_lights = document.getElementById('f3_3_flash_lights')
let f3_4_bg = document.getElementById('f3_4_bg')
let f3_5_moon = document.getElementById('f3_5_moon')
let f3_6_baloon_ship = document.getElementById('f3_6_baloon_ship')
let f3_7_roller_coaster = document.getElementById('f3_7_roller_coaster')
let f3_8_buildings = document.getElementById('f3_8_buildings')
let f3_9_wheel = document.getElementById('f3_9_wheel')
let f3_10_buildings = document.getElementById('f3_10_buildings')
let f3_11_buildings = document.getElementById('f3_11_buildings')
let f3_12_front = document.getElementById('f3_12_front')
let f3_13_flashes = document.getElementById('f3_13_flashes')

//frame 04 ------------------------
let frame04 = document.getElementById('frame-04')

let f4_Untitled_Artwork_1 = document.getElementById('f4_Untitled_Artwork_1')
let f4_Untitled_Artwork_2 = document.getElementById('f4_Untitled_Artwork_2')
let f4_Untitled_Artwork_3 = document.getElementById('f4_Untitled_Artwork_3')
let f4_Untitled_Artwork_4 = document.getElementById('f4_Untitled_Artwork_4')
// let f4_Untitled_Artwork_5 = document.getElementById('f4_Untitled_Artwork_5')
// let f4_Untitled_Artwork_6 = document.getElementById('f4_Untitled_Artwork_6')
let f4_Untitled_Artwork_7 = document.getElementById('f4_Untitled_Artwork_7')
let f4_Untitled_Artwork_8 = document.getElementById('f4_Untitled_Artwork_8')
let f4_Untitled_Artwork_9 = document.getElementById('f4_Untitled_Artwork_9')
let f4_Untitled_Artwork_11 = document.getElementById('f4_Untitled_Artwork_11')
let f4_Untitled_Artwork_12 = document.getElementById('f4_Untitled_Artwork_12')
let f4_Untitled_Artwork_13 = document.getElementById('f4_Untitled_Artwork_13')
let f4_Untitled_Artwork_14 = document.getElementById('f4_Untitled_Artwork_14')
let f4_Untitled_Artwork_15 = document.getElementById('f4_Untitled_Artwork_15')


//frame 05 ------------------------
let frame05 = document.getElementById('frame-05')

let f5_Untitled_Artwork_1 = document.getElementById('f5_Untitled_Artwork_1')
let f5_Untitled_Artwork_2 = document.getElementById('f5_Untitled_Artwork_2')
let f5_Untitled_Artwork_3 = document.getElementById('f5_Untitled_Artwork_3')
let f5_Untitled_Artwork_4 = document.getElementById('f5_Untitled_Artwork_4')
let f5_Untitled_Artwork_5 = document.getElementById('f5_Untitled_Artwork_5')
let f5_Untitled_Artwork_6 = document.getElementById('f5_Untitled_Artwork_6')
let f5_Untitled_Artwork_7 = document.getElementById('f5_Untitled_Artwork_7')
let f5_Untitled_Artwork_8 = document.getElementById('f5_Untitled_Artwork_8')
let f5_Untitled_Artwork_9 = document.getElementById('f5_Untitled_Artwork_9')
let f5_Untitled_Artwork_10 = document.getElementById('f5_Untitled_Artwork_10')
let f5_Untitled_Artwork_11 = document.getElementById('f5_Untitled_Artwork_11')
let f5_Untitled_Artwork_12 = document.getElementById('f5_Untitled_Artwork_12')
let f5_Untitled_Artwork_13 = document.getElementById('f5_Untitled_Artwork_13')
let f5_Untitled_Artwork_14 = document.getElementById('f5_Untitled_Artwork_14')
let f5_Untitled_Artwork_15 = document.getElementById('f5_Untitled_Artwork_15')
let f5_Untitled_Artwork_16 = document.getElementById('f5_Untitled_Artwork_16')
let f5_Untitled_Artwork_17 = document.getElementById('f5_Untitled_Artwork_17')

//frame 06 -----------------------------

let frame06 = document.getElementById('frame-06')

let f6_Untitled_Artwork_4 = document.getElementById('f6_Untitled_Artwork_4')
let f6_r1 = document.getElementById('f6_r1')
let f6_r1_mobile = document.getElementById('f6_r1_mobile')


//frame 07 -----------------------------
let frame07 = document.getElementById('frame-07')

let ritual_desc = document.querySelector('.f7_text_content')


//frame 08 ---------------------------------

let frame08 = document.getElementById('frame-08')







// frame resets
const frameRevert = (frame_no) => {
  let frame_images = document.querySelectorAll(`#frame-${frame_no} img`)
  frame_images.forEach((img) => {
    img.style.transform = "scale(1)";
    img.style.top = "0";
  })
}

const frameImgVisibility = (frame_no) => {
  let frame_images = document.querySelectorAll(`#frame-${frame_no} img`)
  // frame_images.forEach((img) => {
  //   img.style.opacity = "1";
  // })
}

// let observer = new IntersectionObserver(callback, options);

let current_frame = null;
let frame_01;
let frame_02;
let frame_03;
let frame_04;
let frame_05;
let frame_06;
let frame_07;
let frame_08;

let frameSwap_1 = 690;
let frameSwap_2 = 2000;
let frameSwap_3 = 3500;
let frameSwap_4 = 5300;
let frameSwap_5 = 7200;
let frameSwap_6 = 8300;
let frameSwap_7 = 9800;
let frameSwap_8 = 10000;


//navigation body section heights 

const fr_01 = document.querySelector('.fr-01')
fr_01.style.height = `calc(${windowHeight}px + ${frameSwap_1}px)`

const fr_02 = document.querySelector('.fr-02')
fr_02.style.height = `calc(${frameSwap_2}px - ${frameSwap_1}px)`

const fr_03 = document.querySelector('.fr-03')
fr_03.style.height = `calc(${frameSwap_3}px - ${frameSwap_2}px)`

const fr_04 = document.querySelector('.fr-04')
fr_04.style.height = `calc(${frameSwap_4}px - ${frameSwap_3}px)`

const fr_05 = document.querySelector('.fr-05')
fr_05.style.height = `calc(${frameSwap_5}px - ${frameSwap_4}px)`

const fr_06 = document.querySelector('.fr-06')
fr_06.style.height = `calc(${frameSwap_6}px - ${frameSwap_5}px)`

const fr_07 = document.querySelector('.fr-07')
fr_07.style.height = `calc(${frameSwap_7}px - ${frameSwap_6}px)`

// const fr_08 = document.querySelector('.fr-08')
// fr_08.style.height = `calc(${frameSwap_8}px - ${frameSwap_7}px)`




const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args)
  }
}


//section fade in animations
let scroll_y;
window.addEventListener('scroll', throttle(() => {
  scroll_y = window.scrollY;

  if (scroll_y > 0) {
    playBgTheme()
  }
  // console.log(scroll_y);
  // prgBar.style.height = `calc(100% - (${scroll_y} / ${bodyHeight} * 100%))`
  prgBar.style.height = `calc(${scroll_y} / (${bodyHeight} - ${windowHeight} ) * 100%)`

  if (scroll_y < frameSwap_1) {
    li_ph_2.style.height = '0%';
    li_ph_3.style.height = '0%';
    li_ph_4.style.height = '0%';
    li_ph_5.style.height = '0%';
    li_ph_1.style.height = `calc(${scroll_y} / (${frameSwap_1}) * 100%)`

    //nav-box active class
    li_bx_1.classList.add('active')

    //show FRAME 01 
    frame01.classList.remove('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')

    frame_01 = true;
    frame_02 = false;
    frame_03 = false;
    frame_04 = false;
    frame_05 = false;
    // frameRevert('02')
    // frameImgVisibility('01')

    //Frame 01 - Fades
    f1_logo_lg.classList.add('anim-fadeIn')


  } else if (scroll_y > frameSwap_1 && scroll_y < frameSwap_2) {
    li_ph_3.style.height = '0%';
    li_ph_4.style.height = '0%';
    li_ph_5.style.height = '0%';
    li_ph_1.style.height = '100%';
    li_ph_2.style.height = `calc( (${scroll_y} - ${frameSwap_1}) / (${frameSwap_2} - ${frameSwap_1}) * 100%)`

    //show FRAME 02 
    frame01.classList.add('hide')
    frame02.classList.remove('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')
    frame_01 = false;
    frame_02 = true;
    frame_03 = false;
    frame_04 = false;
    frame_05 = false;
    // frameRevert('01')
    // frameImgVisibility('02')
    f1_logo_lg.classList.remove('anim-fadeIn')

  } else if (scroll_y > frameSwap_2 && scroll_y < frameSwap_3) {
    li_ph_1.style.height = '100%';
    li_ph_2.style.height = '100%';
    li_ph_3.style.height = `calc( (${scroll_y} - ${frameSwap_2}) / (${frameSwap_3} - ${frameSwap_2}) * 100%)`

    //show FRAME 03 
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.remove('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')
    frame_01 = false;
    frame_02 = false;
    frame_03 = true;
    frame_04 = true;
    frame_05 = false;
    // frameRevert('02')
  } else if (scroll_y > frameSwap_3 && scroll_y < frameSwap_4) {
    li_ph_1.style.height = '100%';
    li_ph_2.style.height = '100%';
    li_ph_3.style.height = '100%';
    li_ph_4.style.height = `calc( (${scroll_y} - ${frameSwap_3}) / (${frameSwap_4} - ${frameSwap_3}) * 100%)`

    //show FRAME 04 
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.remove('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')
    frame_01 = false;
    frame_02 = false;
    frame_03 = false;
    frame_04 = true;
    frame_05 = false;
  } else if (scroll_y > frameSwap_4 && scroll_y < frameSwap_5) {

    li_ph_1.style.height = '100%';
    li_ph_2.style.height = '100%';
    li_ph_3.style.height = '100%';
    li_ph_4.style.height = '100%';
    li_ph_5.style.height = `calc( (${scroll_y} - ${frameSwap_4}) / (${frameSwap_5} - ${frameSwap_4}) * 100%)`

    //show FRAME 05 
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.remove('hide')
    frame06.classList.add('hide')
    frame06.classList.remove('f6-anim-fadeIn')

    f6_Untitled_Artwork_4.style.transform = ' translate(0, -55%)'



    frame_01 = false;
    frame_02 = false;
    frame_03 = false;
    frame_04 = false;
    frame_05 = true;
    frame_06 = false;
  } else if (scroll_y > frameSwap_5 && scroll_y < frameSwap_6) {

    li_ph_1.style.height = '100%';
    li_ph_2.style.height = '100%';
    li_ph_3.style.height = '100%';
    li_ph_4.style.height = '100%';
    li_ph_5.style.height = '100%';
    li_ph_6.style.height = `calc( (${scroll_y} - ${frameSwap_5}) / (${frameSwap_6} - ${frameSwap_5}) * 100%)`

    //show FRAME 06 
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.remove('hide')
    frame07.classList.add('hide')

    frame_01 = false;
    frame_02 = false;
    frame_03 = false;
    frame_04 = false;
    frame_05 = false;
    frame_06 = true;
    frame_07 = false;
  } else if (scroll_y > frameSwap_6 && scroll_y < frameSwap_7) {
    li_ph_1.style.height = '100%';
    li_ph_2.style.height = '100%';
    li_ph_3.style.height = '100%';
    li_ph_4.style.height = '100%';
    li_ph_5.style.height = '100%';
    li_ph_6.style.height = '100%';
    //show FRAME 07 
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')
    frame07.classList.remove('hide')
    frame08.classList.add('hide')
    frame08.classList.remove('slide-fv-done')



    frame_01 = false;
    frame_02 = false;
    frame_03 = false;
    frame_04 = false;
    frame_05 = false;
    frame_06 = false;
    frame_07 = true;


  } else if (scroll_y > frameSwap_7 && scroll_y < frameSwap_8) {
    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')
    frame04.classList.add('hide')
    frame05.classList.add('hide')
    frame06.classList.add('hide')
    frame07.classList.add('hide')
    frame08.classList.add('slide-fv-done')


    frame_01 = false;
    frame_02 = false;
    frame_03 = false;
    frame_04 = false;
    frame_05 = false;
    frame_06 = false;
    frame_07 = false;
    frame_08 = true;
  }

  sc_val.innerHTML = scroll_y;
  // bg1.style.top = scroll_y * 0.1 + 'px';
  if (frame_01) {
    bg1.style.transform = `scale(1.${scroll_y * 0.6 + 100})`;
    // bg2.style.top = scroll_y * 0.9 + 'px';
    bg2.style.transform = `scale(1.${scroll_y * 0.4 + 100})`;
    park.style.transform = `scale(1.${scroll_y * 0.2 + 100})`;
    clouds.style.transform = `scale(1.${scroll_y * 0.25 + 100})`;
    van.style.top = scroll_y * 0.05 + 'px';
    van.style.transform = `scale(${1 + scroll_y * 0.0006})`;
    space_ship.style.transform = `scale(${1 - scroll_y * 0.0005})`;
    two_ships.style.transform = `scale(${1 + scroll_y * 0.0003})`;
  }
  // frame 02 animation
  if (frame_02 && scroll_y > frameSwap_1 + 150) {
    scroll_y = scroll_y - frameSwap_1;
    let speedFactor = 0;
    f2_front_tower.style.transform = `scale(${1 + scroll_y * 0.0008000 - speedFactor})`;
    f2_front_lights.style.transform = `scale(${1 + scroll_y * 0.0004500 - speedFactor})`;
    f2_entrance_right.style.transform = `scale(${1 + scroll_y * 0.0003500 - speedFactor})`;
    // f2_entrance_right.style.top = scroll_y * -0.08 + 'px';
    f2_entrance_gate.style.transform = `scale(${1 + scroll_y * 0.0002500 - speedFactor})`;
    f2_flags.style.transform = `scale(${1 + scroll_y * 0.0002500 - speedFactor})`;
    // f2_entrance_gate.style.top = scroll_y * -0.05 + 'px';
    f2_entrance_center.style.transform = `scale(${1 + scroll_y * 0.0002000 - speedFactor})`;
    // f2_entrance_center.style.top = scroll_y * 0.02 + 'px';
    f2_city_tower_home.style.transform = `scale(${1 + scroll_y * 0.0001000 - speedFactor})`;
    f2_wheel.style.transform = `scale(${1 + scroll_y * 0.0000900 - speedFactor})`;
    f2_big_plannet.style.transform = `scale(${1 + scroll_y * 0.0000850 - speedFactor})`;
    f2_big_plannet.style.transform = `scale(${1 + scroll_y * 0.0000850 - speedFactor})`;
    f2_mountains.style.transform = `scale(${1 + scroll_y * 0.0000800 - speedFactor})`;
    f2_clouds_white.style.transform = `scale(${1 + scroll_y * 0.0001750 - speedFactor})`;
    f2_sky_full.style.transform = `scale(${1 + scroll_y * 0.0000550 - speedFactor})`;
  }
  // frame 03 animation
  if (frame_03 && scroll_y > frameSwap_2 + 150) {
    scroll_y = scroll_y - frameSwap_2;
    let speedFactor = 0
    f3_13_flashes.style.transform = `scale(${1 + scroll_y * 0.0002000 - speedFactor})`;
    f3_12_front.style.transform = `scale(${1 + scroll_y * 0.0002000 - speedFactor})`;
    f3_11_buildings.style.transform = `scale(${1 + scroll_y * 0.00006000 - speedFactor})`;
    f3_10_buildings.style.transform = `scale(${1 + scroll_y * 0.00005900 - speedFactor})`;
    f3_9_wheel.style.transform = `scale(${1 + scroll_y * 0.00005000 - speedFactor})`;
    f3_8_buildings.style.transform = `scale(${1 + scroll_y * 0.00004500 - speedFactor})`;
    f3_7_roller_coaster.style.transform = `scale(${1 + scroll_y * 0.00004000 - speedFactor})`;
    f3_6_baloon_ship.style.transform = `scale(${1 + scroll_y * 0.00009000 - speedFactor})`;
    f3_5_moon.style.transform = `scale(${1 + scroll_y * 0.00010000 - speedFactor})`;
    f3_5_moon.style.transform = `scale(${1 + scroll_y * 0.00010000 - speedFactor})`;
    f3_4_bg.style.transform = `scale(${1 + scroll_y * 0.00011000 - speedFactor})`;
    f3_3_flash_lights.style.transform = `scale(${1 + scroll_y * 0.0005000 - speedFactor})`;
    f3_2_bg.style.transform = `scale(${1 + scroll_y * 0.0001000 - speedFactor})`;
  }
  // frame 04 animation
  if (frame_04 && scroll_y > frameSwap_3 + 150) {
    scroll_y = scroll_y - frameSwap_3;
    let speedFactor = 0
    f4_Untitled_Artwork_14.style.transform = `scale(${1 + scroll_y * 0.00009000 - speedFactor})`;
    f4_Untitled_Artwork_13.style.transform = `scale(${1 + scroll_y * 0.00008900 - speedFactor})`;
    f4_Untitled_Artwork_12.style.transform = `scale(${1 + scroll_y * 0.00008850 - speedFactor})`;
    f4_Untitled_Artwork_11.style.transform = `scale(${1 + scroll_y * 0.00008800 - speedFactor})`;
    f4_Untitled_Artwork_9.style.transform = `scale(${1 + scroll_y * 0.00008650 - speedFactor})`;
    f4_Untitled_Artwork_8.style.transform = `scale(${1 + scroll_y * 0.00008600 - speedFactor})`;
    f4_Untitled_Artwork_15.style.transform = `scale(${1 + scroll_y * 0.00004900 - speedFactor})`;
    f4_Untitled_Artwork_7.style.transform = `scale(${1 + scroll_y * 0.00004800 - speedFactor})`;
    f4_Untitled_Artwork_4.style.transform = `scale(${1 + scroll_y * 0.00004800 - speedFactor})`;
    f4_Untitled_Artwork_3.style.transform = `scale(${1 + scroll_y * 0.00001800 - speedFactor})`;
    f4_Untitled_Artwork_2.style.transform = `scale(${1 + scroll_y * 0.00000800 - speedFactor})`;
    f4_Untitled_Artwork_1.style.transform = `scale(${1 + scroll_y * 0.00006000 - speedFactor})`;

    if ((scroll_y + frameSwap_3) > 4500) {
      frame04.style.transform = `translate(0%,-50%)`;
      if ((scroll_y + frameSwap_3) > 5100) {
        frame04.style.transform = `translate(0%,-80%)`;

      }
    } else {
      frame04.style.transform = `translate(0, 0)`;
    }

  }
  if (frame_05 && scroll_y > frameSwap_4 + 150) {
    scroll_y = scroll_y - frameSwap_4;
    let speedFactor = 0
    // f6_r1.pause()
    f5_Untitled_Artwork_1.style.transform = `scale(${1 + scroll_y * 0.00016000 - speedFactor})`;
    f5_Untitled_Artwork_2.style.transform = `scale(${1 + scroll_y * 0.00016000 - speedFactor})`;
    f5_Untitled_Artwork_2.style.transform = `scale(${1 + scroll_y * 0.00015900 - speedFactor})`;
    f5_Untitled_Artwork_5.style.transform = `scale(${1 + scroll_y * 0.00015700 - speedFactor})`;
    if ((scroll_y + frameSwap_4) > 6400) {
      frame05.style.transform = `translate(0,-30%)`;
      f5_Untitled_Artwork_16.style.transform = `translate(0,88%)`
      if ((scroll_y + frameSwap_4) > 6700) {
        frame05.style.transform = `translate(0%,-80%)`;
        // f5_Untitled_Artwork_17.style.transform = `translate(0,60%)`
        f5_Untitled_Artwork_16.style.transform = `translate(0,75%)`
        f5_Untitled_Artwork_17.style.transform = `translate(0,40%)`

        if ((scroll_y + frameSwap_4) > 7000) {
          frame05.style.transform = `translate(0%,-100%)`;
          // f5_Untitled_Artwork_17.style.transform = `translate(0,50%)`
          f5_Untitled_Artwork_17.style.transform = `translate(0,10%)`
        }
      }
    } else {
      frame05.style.transform = `translate(0%,0)`;
      f5_Untitled_Artwork_16.style.transform = `translate(0,90%)`
      f5_Untitled_Artwork_17.style.transform = `translate(0,100%)`
    }
  }
  if (frame_06 && scroll_y > frameSwap_5) {
    scroll_y = scroll_y - frameSwap_5;
    //Animation - frame 06 slide up
    frame06.classList.add('f6-anim-fadeIn')
    f6_Untitled_Artwork_4.style.transform = ' translate(0, -100%)'
  }
  if (frame_07 && scroll_y > frameSwap_6 + 150) {
    scroll_y = scroll_y - frameSwap_6;
    ritual_desc.style.top = `calc(75% - ${scroll_y * 0.15}px)`;
    // f6_r1.pause()
    if ((scroll_y + frameSwap_6) > 9300) {
      frame07.style.transform = `translate(0%,-80%)`;
      frame08.classList.remove('hide')
      frame08.classList.add('slide-fv')

      if ((scroll_y + frameSwap_6) > 9550) {
        frame07.style.transform = `translate(0%,-100%)`;
        frame08.classList.remove('slide-fv')
        frame08.classList.add('slide-fv-ended')

      } else {
        frame08.classList.add('slide-fv')
        frame08.classList.remove('slide-fv-ended')

      }
    } else {
      frame07.style.transform = `translate(0, 0)`;
      frame08.classList.remove('slide-fv')
      frame08.classList.remove('slide-fv-ended')

    }

  }
  if (frame_08 && scroll_y > frameSwap_7 + 150) {
    // console.log('view footer');

  }



}, 12));

