// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.slide');
    let index = 0;
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg'
    ];

    function changeImage() {
        slide.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 4000);
    changeImage();
});