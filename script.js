document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#conteudo .button');

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const alvoId = button.getAttribute('data-target');
            const textoescondido = document.querySelector(alvoId);
            if (textoescondido) {
                textoescondido.classList.toggle('hidden');
            }
        });
    });
});
