// script.js
//This Script changes background image on the homepage
document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.slide');
    let index = 0;
    const images = [
        'img/winter-masquerade.jpg',
        'img/tunnel-and-buildings.jpg',
        'img/snow-mountain.jpg',
        'img/flags-on-snow.jpg',
        'img/happy-family-in-snow.jpg'
    ];

    function changeImage() {
        slide.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 4000);
    changeImage();
});


// Image Gallery for Winterlude partners
// This code displays an image gallery for various Winterlude partners.
// The code structure is originally inspired by Sean Taylor's class at ACC.

// Array containing file paths of partner logos
// Images from https://intheglebe.ca/partners/
const galleryImages = ['./img/partners/city-of-ottawa.jpg',
    './img/partners/city-folk.jpg',
    './img/partners/underground-sound.jpg',
    './img/partners/glebe-community.jpg',
    './img/partners/mckeen-metro-glebe.jpg'
];

// Array of captions corresponding to the cryptocurrency coins
const galleryCaptions = ['City of Ottawa',
    'City Folk',
    'Underground Sound',
    'Glebe Community',
    'McKeen Metro Glebe'];

let currentImage = 0; // counter for logo being displayed

// Function to move to the next logo in the gallery
function showNext() {

    currentImage++; // Increment operator: adds 1 to the current value

    // Check if we are at the end of the array and reset to the start if necessary
    if (currentImage === galleryImages.length) {
        currentImage = 0;
    }

    // changes the image
    document.getElementById('partners-img').src = galleryImages[currentImage];

    // changes the caption
    document.getElementById('partnerCaption').innerHTML = galleryCaptions[currentImage];

}

// function to move to the previous image
function showPrevious() {

    // check if we are at the beginning of the array and reset to end
    if (currentImage === 0) {
        currentImage = galleryImages.length;
    }

    currentImage--; // decrement operator which subtracts 1 from the current value

    // changes the images
    document.getElementById('partners-img').src = galleryImages[currentImage];
    // changes the caption
    document.getElementById('partnerCaption').innerHTML = galleryCaptions[currentImage];
}

// Event listener for keypress events to navigate through images using arrow keys or spacebar
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key == 'ArrowDown' || key == 'ArrowRight' || key == ' ') {
        showNext();
    } else if (key == 'ArrowUp' || key == 'ArrowLeft') {
        showPrevious();
    }
});

// add an onclick event to the arrow links to navigate through the images
document.getElementById('nextImage').onclick = showNext;
document.getElementById('previousImage').onclick = showPrevious;