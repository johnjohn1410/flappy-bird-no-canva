/* eslint-disable no-undef */
let counter = 0;
window.counter = counter;
const hit = new Audio("assets/sounds/hit.wav")
const point = new Audio("assets/sounds/ponto.wav")


setInterval(function () {
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let pontos = document.querySelector('#pontos');
    let pipeTopHeight = parseInt(window.getComputedStyle(document.getElementById("top-pipe")).getPropertyValue("height"));
    let pipeBottomTop = 500 - parseInt(window.getComputedStyle(document.getElementById("bottom-pipe")).getPropertyValue("height"));

    if (jumping === 0) {
        character.style.top = (characterTop + 2) + "px";
    }

    if (blockLeft < 20 && blockLeft > -60) {
        if (characterTop < pipeTopHeight || characterTop > pipeBottomTop) {
            hit.volume = 0.005
            hit.preload = "auto"
            hit.play();
            character.style.top = "-1000px";
            hit.addEventListener('ended', function() {
                endGame();
            });
            return;
        }
    }

    if (blockLeft < -40 && blockLeft > -120 && !passedPipe) {
        passedPipe = true;
        point.volume = 0.005
        point.preload = "auto"
        point.play();
        counter++;
        console.log("Score incrementado:", counter);
    }

    if (blockLeft > 20) {
        passedPipe = false;
    }

    if (characterTop > 480) {
        hit.volume = 0.005
        hit.preload = "auto"
        hit.play();
        character.style.top = "-1000px";
        hit.addEventListener('ended', function() {
            endGame();
        });
        return;
    }
    pontos.textContent = counter;
}, 10);

function endGame() {
    localStorage.setItem('pontuacao', counter);
    window.location.href = '../game-over.html';
}
