var botaoCopiar = document.querySelector(".botao-copiar-desativado");
var textoSecreto = document.querySelector("#texto-secreto");

botaoCopiar.addEventListener("click", function(){
	navigator.clipboard.writeText(textoSecreto.innerHTML);
	textoSecreto.innerHTML = "";
	textoDigitado.value = "";
	textoDigitado.focus();
	limpaQuadroDaMensagem();
	botaoCopiar.classList.remove("botao-copiar-desativado");
	botaoCopiar.classList.add("botao-copiar-ativado");
	botaoCopiar.innerText = "Texto Copiado";

	setTimeout(function(){
		botaoCopiar.classList.remove("botao-copiar-ativado");
		botaoCopiar.classList.add("botao-copiar-desativado");
		botaoCopiar.innerText = "Copiar Texto";
	}, 3000);
});