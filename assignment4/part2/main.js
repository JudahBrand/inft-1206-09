const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//image filenames
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// 
const alttexts = ['A Close-up of a Human Eye', 'A Beautiful Landscape', 'Flowers in Nature', 'An Egyptian Hieroglyph', 'A Butterfly on a Leaf'];

/* Looping through images */
for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArray[i]);
    newImage.setAttribute('alt', alttexts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});