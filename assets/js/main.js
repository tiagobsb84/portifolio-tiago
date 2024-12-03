/* BUTTON ACTIVE NAV */
const itemNavigation = document.querySelectorAll('.nav__list li a');
const sections = document.querySelectorAll('section');


itemNavigation.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();//evita o comportamento padrão.
        const targetId = item.getAttribute('href').substring(1); //Obtém o ID da seção.
        const targetSelection = document.getElementById(targetId);

        //Faz scroll suave até a seção clicada.
        window.scrollTo({
            top: targetSelection.offsetTop - 50, //Ajuste para compensa o menu fixo.
            behavior: 'smooth'
        })

        // Remove a classe 'active' de todos os itens
        itemNavigation.forEach(nav => nav.classList.remove('active-link'));
         // Adiciona a classe 'active' no item clicado
        item.classList.add('active-link');
    })
});

//Adicione evento de scroll para atualizar a classe 'active'.
window.addEventListener('scroll', () => {
    let current = '';

    //Identifica qual seção está no centro da tela.
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    //Atualiza o menu para destacar a seção atual sem interferir no clique.
    if(current) {
        itemNavigation.forEach(item => {
            if(item.getAttribute('href').substring(1) === current) {
                item.classList.add('active-link');
            } else {
                item.classList.remove('active-link');
            }
        })
    }
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
