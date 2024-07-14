// script.js

// Animar elementos ao rolar a página
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.curiosidade, .product').forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
    });
});

gsap.from('.banner', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: 'power2.out',
});

// Enviar formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar o formulário, por exemplo, usando AJAX
    alert('Formulário enviado!'); // Exemplo simples de alerta
});
