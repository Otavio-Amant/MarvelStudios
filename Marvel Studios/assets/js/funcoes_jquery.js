// Função Voltar ao Topo
function voltarTopo() {
	$("html body").animate({scrollTop:0}, "slow");
}

/*Função esconder o botão voltar ao topo*/
window.onscroll = function() {
	if (window.pageYOffset < 32) {
		$("#voltar-topo").css("display", "none");
	} else {
		$("#voltar-topo").css("display", "block");
	}
}