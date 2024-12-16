/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
counter =0
let passedPipe = false;

let flappySprites = [
    "url(../../images/flappy-mid.png)",
    "url(../../images/flappy.png)",
    "url(../../images/flappy bottom.png)",
    "url(../../images/flappy.png)"
];
let spriteIndex = 0;

let pipeGap = 150;


hole.addEventListener("animationiteration", () => {
    let topHeight = Math.random() * (400 - pipeGap);
    let bottomHeight = 500 - topHeight - pipeGap;

    document.getElementById("top-pipe").style.height = `${topHeight}px`;
    document.getElementById("bottom-pipe").style.height = `${bottomHeight}px`;

    passedPipe = false;
    console.log("Nova altura dos tubos gerada: ", { topHeight, bottomHeight });
    console.log("pontos:"+(counter-1))
});




