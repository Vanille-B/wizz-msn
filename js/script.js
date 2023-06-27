const wizzButton = document.querySelector('.wizz-button');
const body = document.querySelector('body');
const wizzSound = document.getElementById('wizz-sound');

function preloadSound() {
    wizzSound.load();
    wizzSound.play();
}

wizzButton.addEventListener('click', () => {
    body.classList.toggle('shake');
    preloadSound();

    setTimeout(() => {
        body.classList.toggle('shake');
        // preloadSound();
    }, 500);
});