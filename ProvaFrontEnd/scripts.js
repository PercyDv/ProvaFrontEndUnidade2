// 1º - parte do menu hamburguer.
document.addEventListener('DOMContentLoaded', function() {

    const hamburguer = document.querySelector('.hamburguer');
    const menuLista = document.getElementById('myHamburguer');

    hamburguer.addEventListener('click', function(e) {
        e.preventDefault();
        
        menuLista.classList.toggle('responsivo');
        console.log('Menu hamburguer clicado!');
    });
});

// 2º - parte do slide de imagens
let slideIndex = 0;

function mostrarSlides() {
    let slides = document.querySelectorAll('.mySlides');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';

    setTimeout(mostrarSlides, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarSlides();
});

// 3º - pausa no vídeo
document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('myVideo');
    const botaoPause = document.getElementById('myBtn');

    botaoPause.addEventListener('click', function(){
        if(video.paused){
            video.play();
            botaoPause.textContent = 'Pause';
        } else {
            video.pause();
            botaoPause.textContent = 'Play';
        }
    });
});

// 4º - formulário
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(name.value.trim()===''){
            alert('Por favor, preencha o nome!');
            return console.log('Erro de nome vazio.');
        } else if(surname.value.trim()===''){
            alert('Por favor, preencha o sobrenome!');
            return console.log('Erro de sobrenome vazio.');
        } else if(!email.value.includes('@') || !email.value.includes('.')){
            alert('Por favor, use um e-mail válido!');  
            return console.log('e-mail inválido');
        } else if(message.value.trim()===''){
            alert('Por favor, adicione uma mensagem!');
            return console.log('mensagem não preenchida')
        } else {
            alert('formulário enviado.');
            form.reset(); 
        }
    })
})