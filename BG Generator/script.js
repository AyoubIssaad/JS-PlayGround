const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
// body.style.background("red");

function changeColor() {
  body.style.background = `linear-gradient(to right, ${color1.value},${
    color2.value
  })`;
  css.textContent = `${body.style.background};`;
}
color1.addEventListener('change', changeColor);

color2.addEventListener('change', changeColor);
console.logo("THIS iS COOL");
