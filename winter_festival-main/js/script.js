// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.slide');
    let index = 0;
    const images = [
        'img/image1.jpg',
        'img/image2.jpg',
        'img/image3.jpg',
        'img/image4.jpg',
        'img/image5.jpg'
    ];

    function changeImage() {
        slide.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 4000);
    changeImage();
});