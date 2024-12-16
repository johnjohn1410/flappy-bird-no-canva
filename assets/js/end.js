

const botao = document.getElementById("start");
const pontosFinal = document.getElementById("pontos-final");
const highscore = document.getElementById('highscore');
const medalha = document.getElementById('medal')

let pontosAtuais = localStorage.getItem('pontuacao');
pontosAtuais = pontosAtuais ? parseInt(pontosAtuais) : 0;

pontosFinal.innerHTML = pontosAtuais;

let pontuacaoMaxima = localStorage.getItem('pontuacaoMaxima');
pontuacaoMaxima = pontuacaoMaxima ? parseInt(pontuacaoMaxima) : 0;

if (pontosAtuais > pontuacaoMaxima) {
    localStorage.setItem('pontuacaoMaxima', pontosAtuais);
    pontuacaoMaxima = pontosAtuais;
}

highscore.innerHTML = pontuacaoMaxima;

function restart() {
    window.location.href = "../game.html";
}
if(pontosAtuais < 10 ){
    medalha.src = "../images/bronze-medal.png"
    medalha.style.filter = 'opacity(0%)'
} else if(pontosAtuais >= 10 && pontosAtuais <= 20) {
    medalha.src = "../images/bronze-medal.png"
}else if(pontosAtuais > 20 && pontosAtuais <= 30) {
    medalha.src = "../images/silver-medal.png"
}else if(pontosAtuais > 30 && pontosAtuais <= 40) {
    medalha.src = "../images/gold-medal.png"
}else if (pontosAtuais > 40) {
    medalha.src = "../images/platinum-medal.png"
}

botao.addEventListener("click", restart);
