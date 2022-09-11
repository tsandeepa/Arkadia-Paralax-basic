let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let space_ship = document.getElementById('space_ship')
let two_ships = document.getElementById('two_ships')
let van = document.getElementById('van')
let park = document.getElementById('park')
let clouds = document.getElementById('clouds')
let sc_val = document.getElementById('sc-val')

let frame01 = document.getElementById('frame-01')

// frame 02--------------------------------------

let frame02 = document.getElementById('frame-02')



let btn_2 = document.getElementById('btn_2')

btn_2.addEventListener('click', () => {
  scroll_y = 600;
})

// let observer = new IntersectionObserver(callback, options);

window.addEventListener('scroll', () => {
  let scroll_y = window.scrollY;
  console.log(scroll_y);

  sc_val.innerHTML = scroll_y;
  // bg1.style.top = scroll_y * 0.1 + 'px';
  bg1.style.transform = `scale(1.${scroll_y * 0.6 + 100})`;

  // bg2.style.top = scroll_y * 0.9 + 'px';
  bg2.style.transform = `scale(1.${scroll_y * 0.4 + 100})`;

  park.style.transform = `scale(1.${scroll_y * 0.2 + 100})`;

  clouds.style.transform = `scale(1.${scroll_y * 0.6 + 100})`;


  van.style.top = scroll_y * 0.5 + 'px';
  van.style.transform = `scale(${1 - scroll_y * 0.0005})`;

  space_ship.style.transform = `scale(${1 - scroll_y * 0.0005})`;
  two_ships.style.transform = `scale(${1 + scroll_y * 0.0003})`;


  if (scroll_y > 530) {
    frame01.classList.add('hide')
    frame02.classList.remove('hide')
  } else {
    frame01.classList.remove('hide')
    frame02.classList.add('hide')
  }


})