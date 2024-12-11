/* eslint-disable no-unused-vars */
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;
let passedPipe = false;

let flappySprites = [
    "url(./images/flappy-mid.png)",
    "url(./images/flappy.png)",
    "url(./images/flappy bottom.png)",
    "url(./images/flappy.png)"
];
let spriteIndex = 0;

let pipeGap = 150; // Espaço entre os tubos

// Altura aleatória dos canos ao reiniciar
hole.addEventListener("animationiteration", () => {
    let topHeight = Math.random() * (400 - pipeGap);
    let bottomHeight = 500 - topHeight - pipeGap;

    document.getElementById("top-pipe").style.height = `${topHeight}px`;
    document.getElementById("bottom-pipe").style.height = `${bottomHeight}px`;

    passedPipe = false; // Resetar estado de passagem
    console.log("Nova altura dos tubos gerada: ", { topHeight, bottomHeight });
    counter++
    if (counter === null){
        counter = 0
    }
    console.log("pontos:"+(counter))
});

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping === 0) {
        character.style.top = (characterTop + 3.5) + "px";
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log("Block Left:", blockLeft); // Depuração: verificar posição horizontal do cano

    let pipeTopHeight = parseInt(window.getComputedStyle(document.getElementById("top-pipe")).getPropertyValue("height"));
    let pipeBottomTop = 500 - parseInt(window.getComputedStyle(document.getElementById("bottom-pipe")).getPropertyValue("height"));
    console.log("Alturas dos tubos:", { pipeTopHeight, pipeBottomTop });

    // Incrementar pontuação se o personagem passou completamente pelo cano
    if (blockLeft < 20 && !passedPipe) {
        if (blockLeft < -50) { // O bloco está completamente à esquerda do personagem
            passedPipe = true; // Garantir que só conta uma vez por cano
            counter++;
            console.log("Score incrementado:", counter); // Exibir no console
        }
    }

    // Verificar colisão com os canos
    if (blockLeft < 20 && blockLeft > -60) {
        if (characterTop < pipeTopHeight || characterTop > pipeBottomTop) {
            alert("Game over. Score: " + counter-1);
            character.style.top = "100px"; // Resetar posição
            counter = 0;
            passedPipe = false;
        }
    }

    // Verificar se o personagem caiu fora da tela
    if (characterTop > 480) {
        alert("Game over. Score: " + counter-1);
        character.style.top = "100px";
        counter = 0;
        passedPipe = false;
    }
}, 10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumpCount < 15) {
            character.style.backgroundImage = flappySprites[spriteIndex];
            spriteIndex = (spriteIndex + 1) % flappySprites.length;
        }
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
        }
        jumpCount++;
    }, 10);
}
