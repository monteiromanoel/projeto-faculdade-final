const bar = document.getElementById('bar');

const nav = document.getElementById('navbar');

const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function msgCart() {
    window.alert("Produto Adicionado ao Carrinho!")
}

function signUp() {
    const enterArea = document.getElementById("enterArea");
    enterArea.style.display = "none";
}

