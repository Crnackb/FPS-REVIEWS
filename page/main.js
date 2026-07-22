// ============================================================
// SLIDER DE LA GALERÍA (solo corre si la página tiene #gallery)
// ============================================================
const galleryContainer = document.querySelector('.gallery-container');

if (galleryContainer) {
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
        const offset = -currentIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    render();
}

// ============================================================
// MENÚ HAMBURGUESA (nav mobile)
// ============================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar el menú al elegir una opción
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });

    // Cerrar el menú si la ventana crece de vuelta a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}