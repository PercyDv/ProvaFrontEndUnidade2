document.addEventListener('DOMContentLoaded', function() {

    const hamburguer = document.querySelector('.hamburguer');
    const menuLista = document.getElementById('myHamburguer');

    hamburguer.addEventListener('click', function(e) {
        e.preventDefault();
        
        menuLista.classList.toggle('responsivo');
        console.log('Menu selecionado!');
    });
});

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
            return console.log('Nome vazio');
        } else if(surname.value.trim()===''){
            alert('Por gentileza, preencha o sobrenome!');
            return console.log('Sobrenome vazio.');
        } else if(!email.value.includes('@') || !email.value.includes('.')){
            alert('Por gentileza, use um e-mail válido!');  
            return console.log('E-mail inválido');
        } else if(message.value.trim()===''){
            alert('Por favor, adicione uma mensagem!');
            return console.log('mensagem não preenchida')
        } else {
            alert('Formulário enviado.');
            form.reset(); 
        }
    })
})