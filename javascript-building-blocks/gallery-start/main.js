const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const IMAGECOUNT = 5;
for (let i = 1; i <= IMAGECOUNT; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', newImage.src)
  })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light")
    btn.textContent = "Lighten"
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
  } else if (btn.getAttribute("class") === "light") {
    btn.setAttribute("class", "dark")
    btn.textContent = "Darken"
    overlay.style.backgroundColor = "rgba(0,0,0,0)"
  }
})
