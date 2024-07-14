document.addEventListener('DOMContentLoaded', function() {
    const popups = document.querySelectorAll('.popup');
    const popupTriggers = document.querySelectorAll('.show-popup');
    const closeButtons = document.querySelectorAll('.close-popup');
    
    // Mostrar popup ao clicar em "Ver Mais"
    popupTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function() {
            popups[index].style.display = 'block';
        });
    });
    
    // Fechar popup ao clicar no botão de fechar
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            popup.style.display = 'none';
        });
    });
});
