selecionarMapa();

function desenhar(elemento) {
  if(elemento.classList.contains(tipoTerreno)) {
    elemento.classList.remove(tipoTerreno);
  } else {
    elemento.classList.remove("floresta", "aldeia", "fazenda", "água", "monstro");
    elemento.classList.add(tipoTerreno);
  };
}

function selecionarTipoTerreno(elemento, tipo) {
  if(elemento.classList.contains("selecionado")) {
    tipoTerreno = "";
    elemento.classList.remove("selecionado");
  } else {
    document.querySelectorAll(".selecionado").forEach(e => e.classList.remove("selecionado"));
    tipoTerreno = tipo;
    elemento.classList.add("selecionado");
  }
}

function selecionarMapa() {
  var mapaa = document.getElementById("mapa").value;

  limparMapa();

  axios.get('./mapas.json')
    .then(function(response) {
      const teste = response.data.mapas.filter(
        function(item) {
          return item.mapa === mapaa;
        }
      );
      desenharMapa(teste[0].montanhas, teste[0].ruínas, teste[0].abismos);
    })
    .catch(function(error) {
      console.warn(error);
    });
}

function desenharMapa(montanhas, ruínas, abismos) {
  montanhas.map(function(item) {
    desenharMontanhas(item);
  });

  ruínas.map(function(item) {
    desenharRuínas(item);
  });
}

function desenharMontanhas(item) {
  document.getElementById(item).classList.add('montanha');
}

function desenharRuínas(item) {
  document.getElementById(item).innerHTML = '<div style="border:none" class="espaço ruínaLaranja"></div>';
}

function limparMapa() {
  mapa = [
    "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11",
    "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11",
    "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11",
    "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11",
    "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11",
    "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11",
    "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11",
    "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11",
    "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "I11",
    "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11",
    "K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9", "K10", "K11"
  ];

  mapa.map(function(item) {
    document.getElementById(item).classList.remove('montanha');
    if(document.querySelector(`#${item} div`) != null) {
      document.querySelector(`#${item} div`).remove();
    }
  });
}