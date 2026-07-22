let currentIndex = 0;
const totalImages = document.querySelectorAll('.gallery-item').length;
const dotsContainer = document.querySelector('.gallery-dots');

// Crear los puntos indicadores dinámicamente
for (let i = 0; i < totalImages; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir a la imagen ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
}

document.querySelector('.prev-button').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    render();
}

function goTo(index) {
    currentIndex = index;
    render();
}

function render() {
    const galleryContainer = document.querySelector('.gallery-container');
    const offset = -currentIndex * 100;
    galleryContainer.style.transform = `translateX(${offset}%)`;

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

render();