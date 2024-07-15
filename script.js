function desenhar(elemento) {
  elemento.classList.remove('forest', 'village', 'farm', 'water', 'monster')
  elemento.classList.add(tipoTerreno);
}

function selecionarTipoTerreno(tipo){
  tipoTerreno = tipo;
}