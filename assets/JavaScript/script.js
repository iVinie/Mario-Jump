//Seleciona a classe .mario no css
const mario = document.querySelector('.mario')

/*Seleciona a classe .pipe*/
const pipe = document.querySelector('.pipe')

//add a classe jump na img do mario
const jump = () =>{
    mario.classList.add('jump')

    //Vai remover a classe, para reniciar a função do pulo novamente
    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)
}

/*loop para verificar se o Mario pulou ou bateu no cano*/
const loop = setInterval(() =>{

    /*Vai pegar a posição do cano, se por acaso o Mario não pular ate a posição 120px, o jogo acaba*/
    const pipePosition = pipe.offsetLeft

    /*Vai pegar a posição bottom dp Mario
    O getComputerStyle, permite pegar as propriedades do css, pois
    pelo offsetBootom não iria funcionar
    O + vai converter para Number e o reclace vai remover o px do print*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    /*Para o jogo, vamos parar a animação de tudo*/
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        //Animação do cano é parada
        pipe.style.animation = 'none'
        /*Define a posição do cano quando a animação acabar*/
        pipe.style.left = `${pipePosition}px`

        /*Animação do Mario é parada*/
        mario.style.animation = 'none'
        /*Define a posição do Mario quando a animação acabar*/
        mario.style.bottom = `${marioPosition}px`

        /*Vai mudar a imagem do mario quando o jogo acabar*/
        mario.src = './assets/Images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }


} , 10)

//Vai ativar o jump quando apertar qualquer tecla do teclado
document.addEventListener('keydown', jump)