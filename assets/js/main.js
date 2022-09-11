//frame 03 -----------------------------------------

let frame01 = document.getElementById('frame-01')

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

let frameSwap_1 = 690;
let frameSwap_2 = 2000;




window.addEventListener('scroll', () => {
  let scroll_y = window.scrollY;
  // console.log(scroll_y);


  if (scroll_y < frameSwap_1) {
    //show FRAME 01 

    frame01.classList.remove('hide')
    frame02.classList.add('hide')
    frame03.classList.add('hide')

    frame_02 = false;
    frame_01 = true;
    frameRevert('02')
    // frameImgVisibility('01')
  } else if (scroll_y > frameSwap_1 && scroll_y < frameSwap_2) {
    //show FRAME 02 

    frame01.classList.add('hide')
    frame02.classList.remove('hide')
    frame03.classList.add('hide')

    frame_02 = true;
    frame_01 = false;
    // frameRevert('01')
    // frameImgVisibility('02')
  } else if (scroll_y > frameSwap_2) {
    //show FRAME 03 

    frame01.classList.add('hide')
    frame02.classList.add('hide')
    frame03.classList.remove('hide')
    frame_01 = false;
    frame_02 = false;
    frame_03 = true;
    // frameRevert('02')

  }



  sc_val.innerHTML = scroll_y;
  // bg1.style.top = scroll_y * 0.1 + 'px';

  if (frame_01) {
    bg1.style.transform = `scale(1.${scroll_y * 0.6 + 100})`;
    // bg2.style.top = scroll_y * 0.9 + 'px';
    bg2.style.transform = `scale(1.${scroll_y * 0.4 + 100})`;
    park.style.transform = `scale(1.${scroll_y * 0.2 + 100})`;
    clouds.style.transform = `scale(1.${scroll_y * 0.6 + 100})`;

    van.style.top = scroll_y * 0.05 + 'px';
    van.style.transform = `scale(${1 + scroll_y * 0.0006})`;

    space_ship.style.transform = `scale(${1 - scroll_y * 0.0005})`;
    two_ships.style.transform = `scale(${1 + scroll_y * 0.0003})`;
  }

  // frame 02 animation
  if (frame_02 && scroll_y > frameSwap_1 + 150) {
    scroll_y = scroll_y - frameSwap_1;
    let speedFactor = 0

    f2_front_tower.style.transform = `scale(${1 + scroll_y * 0.0008000 - speedFactor})`;
    f2_front_lights.style.transform = `scale(${1 + scroll_y * 0.0004500 - speedFactor})`;

    f2_entrance_right.style.transform = `scale(${1 + scroll_y * 0.0003500 - speedFactor})`;
    f2_entrance_right.style.top = scroll_y * -0.08 + 'px';

    f2_entrance_gate.style.transform = `scale(${1 + scroll_y * 0.0002500 - speedFactor})`;
    f2_entrance_gate.style.top = scroll_y * -0.05 + 'px';

    f2_entrance_center.style.transform = `scale(${1 + scroll_y * 0.0001500 - speedFactor})`;
    f2_entrance_center.style.top = scroll_y * -0.02 + 'px';

    f2_city_tower_home.style.transform = `scale(${1 + scroll_y * 0.0001000 - speedFactor})`;

    f2_wheel.style.transform = `scale(${1 + scroll_y * 0.0000900 - speedFactor})`;

    f2_big_plannet.style.transform = `scale(${1 + scroll_y * 0.0000850 - speedFactor})`;
    f2_big_plannet.style.transform = `scale(${1 + scroll_y * 0.0000850 - speedFactor})`;
    f2_mountains.style.transform = `scale(${1 + scroll_y * 0.0000800 - speedFactor})`;
    f2_clouds_white.style.transform = `scale(${1 + scroll_y * 0.0001750 - speedFactor})`;
    f2_sky_full.style.transform = `scale(${1 + scroll_y * 0.0000550 - speedFactor})`;

  }


  if (frame_03 && scroll_y > frameSwap_2 + 150) {
    scroll_y = scroll_y - frameSwap_2;
    let speedFactor = 0

    f3_13_flashes.style.transform = `scale(${1 + scroll_y * 0.0006000 - speedFactor})`;
    f3_12_front.style.transform = `scale(${1 + scroll_y * 0.0006800 - speedFactor})`;
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




})