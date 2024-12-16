/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const pulo = new Audio('assets/sounds/pulo.wav')
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
        pulo.volume = 0.05
        pulo.play()
    }, 10);
}