const duckSeal = document.querySelector(".sealing");
const letter = document.querySelector(".letter");
const letterSealClosed = document.querySelector(".letter-seal-closed");
const letterSealOpened = document.querySelector(".letter-seal-opened");

function animation() {
    letter.classList.toggle("toggle");
    letterSealClosed.classList.toggle("closed-seal-animation");
    letterSealOpened.classList.toggle("open-seal-animation");

    letter.classList.toggle("opac");
}

// duckSeal.addEventListener("click", animation);