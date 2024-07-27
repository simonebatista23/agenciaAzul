const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
    if (imagemAtual === imagens.length - 1) {
        return;
    }

    imagemAtual++;


    esconderImagem();
    mostrarimagem();
    mostrarOuEsconderSetas();

})


setaVoltar.addEventListener("click", function () {

    if (imagemAtual === 0) {
        return;
    }
    imagemAtual--;


    esconderImagem();
    mostrarimagem();
    mostrarOuEsconderSetas();

})



function esconderImagem() {
    const imgAberta = document.querySelector(".mostrar");

    imgAberta.classList.remove("mostrar");
}

function mostrarimagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEhAPrimeira = imagemAtual !== 0;
    if (naoEhAPrimeira) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }


    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }


}

const box = document.querySelector(".image")
const imageHero = document.querySelectorAll(".image img");



console.log(imageHero)



let contador =0

function slider(){

    contador++;


if(contador> imageHero.length -1)    {
    contador = 0;
}

box.style.transform = `translateX(${-contador *100}%)`
    // console.log("Ola")
}

setInterval(slider, 4000);


// const setaAvancarHero = document.getElementById("seta-avancar-hero");
// const setaVoltarHero = document.getElementById("seta-voltar-hero")
// let i = 0;
// setaAvancarHero.addEventListener("click", function () {
//     if (i === imageHero.length - 1) {
//         return;
//     }
//     i ++;
//     esconderHero();
// //sempre colocar o esconder primeiro e depois o mostrar
//     mostrarHero();
    
// })


// setaVoltarHero.addEventListener("click", function () {
//     if (i === 0) {
//         return;
//     }
//     i --;

//     esconderHero();
//     mostrarHero();
// })

// function mostrarHero() {
//     imageHero[i].classList.add("mostrarHero");
// }

// function esconderHero() {
//     const imgA = document.querySelector(".mostrarHero");
//     imgA.classList.remove("mostrarHero");

// }
