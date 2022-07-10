function limpaQuadroDaMensagem(){
	var imagemPersonagem = document.querySelector(".imagem-personagem");
	imagemPersonagem.classList.add("fadeOut");
	var fraseDaCaixa = document.querySelector(".frase-da-caixa");
	fraseDaCaixa.classList.add("fadeOut");
	var fraseDaCaixaII = document.querySelector(".frase-da-caixa-2");
	fraseDaCaixaII.classList.add("fadeOut");

	if(textoDigitado.value == 0){
		imagemPersonagem.classList.remove("fadeOut");
		imagemPersonagem.classList.add("imagem-personagem");
		fraseDaCaixa.classList.remove("fadeOut");
		fraseDaCaixa.classList.add("frase-da-caixa");
		fraseDaCaixaII.classList.remove("fadeOut");
		fraseDaCaixaII.classList.add("frase-da-caixa-2");
	}
	
}

function escreveNoQuadro(texto){
	var textoSecreto = document.querySelector("#texto-secreto");
	textoSecreto.innerHTML = texto;
}
