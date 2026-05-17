const btnAbrir   = document.getElementById('abrirmobile');
const btnFechar  = document.getElementById('fecharmobile');
const menu       = document.getElementById('mobile');
const overlay    = document.getElementById('mobileoverl');

function abrirMenu() {
    menu.classList.add('abrirmenu');
    menu.setAttribute('aria-hidden', 'false');
    btnAbrir.setAttribute('aria-expanded', 'true');
}

function fecharMenu() {
    menu.classList.remove('abrirmenu');
    menu.setAttribute('aria-hidden', 'true');
    btnAbrir.setAttribute('aria-expanded', 'false');
}

btnAbrir.addEventListener('click', abrirMenu);


btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);


menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});
