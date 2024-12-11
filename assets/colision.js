/* eslint-disable no-undef */
let counter = 0
setInterval(function () {
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let pontos = document.querySelector('#pontos')
    if (jumping === 0) {
        character.style.top = (characterTop + 3.5) + "px";
    }

    if (blockLeft < -40 && blockLeft > -120 && !passedPipe) {
        passedPipe = true;
        counter++;
        console.log("Score incrementado:", counter);
    }

    let pipeTopHeight = parseInt(window.getComputedStyle(document.getElementById("top-pipe")).getPropertyValue("height"));
    let pipeBottomTop = 500 - parseInt(window.getComputedStyle(document.getElementById("bottom-pipe")).getPropertyValue("height"));

    if (blockLeft < 20 && blockLeft > -60) {
        if (characterTop < pipeTopHeight || characterTop > pipeBottomTop) {
            character.style.top = "100px";
            passedPipe = false;
            window.location.href = '../game-over.html'
        }
    }

    if (characterTop > 480) {
        character.style.top = "100px";
        passedPipe = false;
        window.location.href = '../game-over.html'
    }
    pontos.textContent = counter
}, 10);
if(counter < 0){
    counter = 0;
}

