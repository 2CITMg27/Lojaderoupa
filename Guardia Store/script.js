document.addEventListener("DOMContentLoaded", function () {
    // Adicionando funcionalidade para o botão de compra
    const buttons = document.querySelectorAll('.comprar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item adicionado ao carrinho!');
        });
    });
});
