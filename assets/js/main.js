/* BUTTON ACTIVE NAV */
const itemNavigation = document.querySelectorAll('.nav__list li a');

itemNavigation.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        itemNavigation.forEach(nav => nav.classList.remove('active-link'));
         // Adiciona a classe 'active' no item clicado
        item.classList.add('active-link');
    })
})

/*const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const carouselContainer = document.querySelector('.project__carousel__container');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.project__card').length;
    const visibleCards = 3;
    if(currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

//offsetWidth retorna a largura total de um elemento em pixels, padding e bodar. Não inclui margin.
function updateCarousel() {
    const cardWidth = document.querySelector('.project__card').offsetWidth;
    carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}*/
