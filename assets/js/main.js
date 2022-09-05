let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let space_ship = document.getElementById('space_ship')
let two_ships = document.getElementById('two_ships')
let van = document.getElementById('van')
let park = document.getElementById('park')
let clouds = document.getElementById('clouds')

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  console.log(value);

  // bg1.style.top = value * 0.1 + 'px';
  bg1.style.transform = `scale(1.${value * 0.6 + 100})`;

  // bg2.style.top = value * 0.9 + 'px';
  bg2.style.transform = `scale(1.${value * 0.4 + 100})`;

  park.style.transform = `scale(1.${value * 0.2 + 100})`;

  clouds.style.transform = `scale(1.${value * 0.6 + 100})`;



  van.style.top = value * 0.5 + 'px';
  van.style.transform = `scale(${1 - value * 0.0005})`;

  space_ship.style.transform = `scale(${1 - value * 0.0005})`;
  two_ships.style.transform = `scale(${1 + value * 0.0003})`;




})