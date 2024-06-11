let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.review-card');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const carousel = document.getElementById('carousel');
    const offset = -currentSlide * 100; // Cambio a 100% para reflejar el nuevo ancho de las tarjetas
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa el carrusel mostrando la primera diapositiva
showSlide(currentSlide);
