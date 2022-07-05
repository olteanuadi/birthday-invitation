// All the elements are inside div 'letter'
const letter = document.querySelector(".letter");
// Elements of the seal body
const duckSeal = document.querySelector(".sealing");
const letterSealClosed = document.querySelector(".letter-seal-closed");
const letterSealOpened = document.querySelector(".letter-seal-opened");
const sealBack = document.querySelector(".letter-back");
const sealFront = document.querySelector(".letter-front");
const topSecretSign = document.querySelector(".top-secret");
const sealElements = [duckSeal, letterSealOpened, sealBack, sealFront, topSecretSign];
// The actual letter
const messagePaper = document.querySelector(".letter-paper")
// Paperclip photos
const paperclip1 = document.querySelector(".paperclip1");
const paperclip2 = document.querySelector(".paperclip2");

var firstClick = true;
var secondClick = true;

function animation() {
    if (firstClick) { // First click, opening the seal
        letter.classList.toggle("toggle");
        duckSeal.classList.toggle("move-ducky");
        letterSealClosed.classList.toggle("closed-seal-animation");
        letterSealOpened.classList.toggle("opened-seal-animation");
        messagePaper.classList.toggle("move-letter-slightly");

        // letter.classList.toggle("opac");
        firstClick = false;
        return;
    } else if (secondClick) { // Second click, displaying the letter
        messagePaper.classList.toggle("take-letter-out");
        letter.classList.toggle("move-seal-body");
        letterSealClosed.classList.toggle("opac");
        for (let i = 0; i < sealElements.length; ++i) {
            sealElements[i].classList.toggle("half-fade");
        }
        paperclip1.classList.toggle("fade-in");
        paperclip2.classList.toggle("fade-in");
        paperclip1.classList.toggle("move-paperclip1");
        paperclip2.classList.toggle("move-paperclip2");

        secondClick = false;
        return;
    }
}

window.addEventListener("click", animation);
