let wizzButton = document.querySelector('.wizz-button');
let body = document.querySelector('body');

wizzButton.addEventListener('click', () => {
    body.classList.toggle('shake');
    setTimeout(() => {
        body.classList.toggle('shake');
    }, 800);
});