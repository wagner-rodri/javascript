
//Anima a inserção do conteúdo sobre animais
function navegacaoListaAnimais () {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.removeAttribute('class');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}
navegacaoListaAnimais();

//Anima lista FAQ
function faqList () {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classeAtivo = 'ativo'
    if(accordionList.length) {
        accordionList[0].classList.add(classeAtivo);
        accordionList[0].nextElementSibling.classList.add(classeAtivo);

        function activeAccordion() {
            this.classList.toggle(classeAtivo);
            this.nextElementSibling.classList.toggle(classeAtivo);
        }

        accordionList.forEach((index) => {
            index.addEventListener('click', activeAccordion);
        })
    }
}
faqList();


function scrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach ((link) => {
        link.addEventListener('click',scrollToSection);
    })
}
scrollSuave();