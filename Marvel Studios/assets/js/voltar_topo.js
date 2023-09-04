// FUNÇÃO VOLTAR AO TOPO
function voltarTopo() {
    window.scrollTo(0, 0);
}

// Esconder o botão voltar ao topo
window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.querySelector("#voltar-topo").style.display = "none"
    } else {
        document.querySelector("#voltar-topo").style.display = "block"
    }
}