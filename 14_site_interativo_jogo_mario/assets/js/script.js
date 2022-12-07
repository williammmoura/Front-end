const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


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

    /*Consição (if) para verificar a posição do Maria em relação ao cano*/
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