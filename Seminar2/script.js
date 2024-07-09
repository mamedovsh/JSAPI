let currentImageIndex = 0;
let images = [
    { src: 'img/1675496718_gas-kvas-com-p-fonovie-risunki-dlya-rabochego-stola-na-ve-20.jpg' },
    { src: 'img/1696602055_gas-kvas-com-p-kartinki-s-prirodoi-13.jpg' },
    { src: 'img/Waterfalls_Rays_of_light_548550_3840x2400.jpg' }
];

// функция для генерации навигационных точек
function generateNavigationList() {
    const listElement = document.getElementById('navigation-list');
    listElement.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const liElement = document.createElement('li');
        liElement.dataset.index = i;
        liElement.onclick = () => {
            currentImageIndex = parseInt(liElement.dataset.index);
            updateImages();
        };
        listElement.appendChild(liElement);
    }
}

// функция для переключения на предыдущее изображение
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    updateImages();
}

// функция для переключения на следующее изображение
function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImages();
}

// функция для обновления слайдера
function updateImages() {
    const currentImageElement = document.getElementById('current-image');
    currentImageElement.src = images[currentImageIndex].src;
    generateNavigationList();
}
