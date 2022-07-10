var textoDigitado = document.querySelector("#texto-digitado");
	textoDigitado.addEventListener("input", function(){
		
});

var textoDescriptografado = document.querySelector(".botao-descriptografar");
textoDescriptografado.addEventListener("click", function(){
	var texto = textoDigitado.value;

	var descriptaE = texto.replaceAll("enter", "e");
	var descriptaI = descriptaE.replaceAll("imes", "i"); 
	var descriptaO = descriptaI.replaceAll("ober", "o");
	var descriptaA = descriptaO.replaceAll("ai", "a");
	var descriptaU = descriptaA.replaceAll("ufat", "u");
	
	escreveNoQuadro(descriptaU);
	
});