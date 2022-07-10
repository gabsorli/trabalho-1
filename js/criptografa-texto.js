var textoDigitado = document.querySelector("#texto-digitado");
textoDigitado.focus();
	textoDigitado.addEventListener("input", function(){

	limpaQuadroDaMensagem();
	escreveNoQuadro(textoDigitado.value);
		
});

var textoCriptografado = document.querySelector(".botao-criptografar");
textoCriptografado.addEventListener("click", function(){
	var texto = textoDigitado.value;

	var testaLetraE = texto.replaceAll("e", "enter");
	var testaLetraI = testaLetraE.replaceAll("i", "imes"); 
	var testaLetraO = testaLetraI.replaceAll("o", "ober");
	var testaLetraA = testaLetraO.replaceAll("a", "ai");
	var testaLetraU = testaLetraA.replaceAll("u", "ufat");

	escreveNoQuadro(testaLetraU);

	
});



