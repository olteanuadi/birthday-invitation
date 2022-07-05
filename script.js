const duckSeal = document.querySelector(".sealing");
const letter = document.querySelector(".letter");
const letterSealClosed = document.querySelector(".letter-seal-closed");
const letterSealOpened = document.querySelector(".letter-seal-opened");

var toClick = true;

function animation() {
    if (toClick) {
    letter.classList.toggle("toggle");
    duckSeal.classList.toggle("move-ducky");
    letterSealClosed.classList.toggle("closed-seal-animation");
    letterSealOpened.classList.toggle("open-seal-animation");

    // letter.classList.toggle("opac");
    toClick = false;
    }
}

window.addEventListener("click", animation);
