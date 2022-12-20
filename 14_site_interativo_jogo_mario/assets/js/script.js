const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('#score');
const gameOver = document.querySelector('#gameOver');


/*Arrow function para ajustar o pulo do Mario*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}

/*Função para testar a posição do Mario em relação ao cano.*/
const loop = setInterval(()=>{
    //Pipe position. 
    const pipePosition = pipe.offsetLeft;
    //Mario position.
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    /*Condição (if) para verificar a posição do Maria em relação ao cano*/
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 112){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        /*Mario Game-Over*/
        mario.src = 'assets/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);



//Declaração de variáveis para o "Score"
let interval = null;
let playerScore = 0;//Contador

//Função para o "Score".
let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML=`Score - <b>${playerScore}</b>`;
} 

//Start Game.
window.addEventListener('keydown', (start)=>{
    //Definindo o botão para iniciar o contador (playerScore).
    if(start.code == 'Space'){
        gameOver.style.display = "none";
        pipe.classList.add("pipe");
       
        //Intervalo de adição de pontos no score.
        interval = setInterval(scoreCounter, 150);
    };
});
