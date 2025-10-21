var options = {
    strings: [
        'desenvolvedor Full-Stack', 
        'estudante de Sistema de Informação', 
        'entusiasta de Java e Python'
    ],
    typeSpeed: 50, 
    backSpeed: 25, 
    loop: true
};

var typed = new Typed('.maquina-escrever', options);

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});