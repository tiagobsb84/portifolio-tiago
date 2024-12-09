/* BUTTON ACTIVE NAV */
const itemNavigation = document.querySelectorAll('.nav__header li a');
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

// Menu Hamburguer
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('menu__nav');

// Alternar entre abrir e fechar o menu
menuBtn.addEventListener('click', function () {
    const isOpen = navList.classList.toggle('open');
    menuBtn.textContent = isOpen ? 'X' : '☰' // Alterna o icone.
})