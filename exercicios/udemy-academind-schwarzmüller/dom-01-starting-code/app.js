const section = document.querySelector('section');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    section.classList.toggle('invisible')
})