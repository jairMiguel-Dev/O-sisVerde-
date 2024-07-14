document.addEventListener('DOMContentLoaded', function() {
    const popups = document.querySelectorAll('.popup');
    const popupTriggers = document.querySelectorAll('.btn-comprar');
    const closeButtons = document.querySelectorAll('.close-popup');
    const overlay = document.getElementById('popup-overlay');

    // Mostrar popup ao clicar em "Comprar"
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetPopupId = trigger.getAttribute('data-target');
            const popup = document.getElementById(targetPopupId);
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Fechar pop-up ao clicar no botão de fechar
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Fechar pop-up ao clicar no overlay
    overlay.addEventListener('click', function() {
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});
