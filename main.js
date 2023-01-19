function enviarFormulario() {
  var noma = document.getElementById("noma");
  var nome = document.getElementById("nome");
  var nomi = document.getElementById("nomi");
  var nomo = document.getElementById("nomo");
  var nomu = document.getElementById("nomu");
  var mensagemErra = document.getElementById("mensagemErra");
  var mensagemErrao = document.getElementById("mensagemErrao");
  var mensagemErre = document.getElementById("mensagemErre");
  var mensagemErri = document.getElementById("mensagemErri");
  var mensagemErro = document.getElementById("mensagemErro");
  var mensagemErru = document.getElementById("mensagemErru");
  
  function limparMensagens(){
	mensagemErra.innerHTML = "";
  mensagemErre.innerHTML = "";
  mensagemErri.innerHTML = "";
  mensagemErro.innerHTML = "";
  mensagemErru.innerHTML = "";
  mensagemErrao.innerHTML = "";
}

  if(noma.value.trim().length == 0){
  limparMensagens();
  mensagemErra.innerHTML = "Campo Obrigatório";mensagemErra.style.color = "red";
  mensagemErrao.innerHTML = "Campos obrigatórios não registrados.";
  mensagemErrao.style.color = "red";
  document.getElementById("noma").focus();
  } else if 
  ( nome.value.trim().length == 0 ) {
  limparMensagens();
  mensagemErre.innerHTML = "Campo Obrigatório";mensagemErre.style.color = "red";
  mensagemErrao.innerHTML = "Campos obrigatórios não registrados.";
  mensagemErrao.style.color = "red";
  document.getElementById("nome").focus();
  } else if 
  (nomi.value.trim().length == 0 ) {
  limparMensagens();
  mensagemErri.innerHTML = "Campo Obrigatório";mensagemErri.style.color = "red";
  mensagemErrao.innerHTML = "Campos obrigatórios não registrados.";
  mensagemErrao.style.color = "red";
  document.getElementById("nomi").focus();
  } else if 
  (nomo.value.trim().length == 0 ) {
  limparMensagens();
  mensagemErro.innerHTML = "Campo Obrigatório";mensagemErro.style.color = "red";
  mensagemErrao.innerHTML = "Campos obrigatórios não registrados.";
  mensagemErrao.style.color = "red";
  document.getElementById("nomo").focus();
  } else if 
  (nomu.value.trim().length == 0) {
  limparMensagens();
  mensagemErru.innerHTML = "Campo Obrigatório"; mensagemErru.style.color = "red";
  mensagemErrao.innerHTML = "Campos obrigatórios não registrados.";
  mensagemErrao.style.color = "red";
  document.getElementById("nomu").focus();
  } else {
  limparMensagens();    
  mensagemErrao.innerHTML = "Sucesso!";
  mensagemErrao.style.color = "#0F7B0F"}; 
}