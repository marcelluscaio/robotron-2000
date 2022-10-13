const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },

    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const botoes = document.querySelectorAll(".controle-ajuste");

botoes.forEach((botao) => {
   botao.addEventListener("click", (e) => {
      modificaContador(e.target.parentNode, e.target.dataset.controle);
      atualizaEstatistica(e.target.parentNode, e.target.dataset.controle);
   }); 

})

function modificaContador(elemento, operacao){
   let valorContador = parseInt(elemento.querySelector("[data-contador]").value);

   if(operacao==="+"){
      valorContador+=1;
   } else if (operacao==="-"){
      valorContador-=1;
   }   
   elemento.querySelector("[data-contador]").value = valorContador;
}

   function atualizaEstatistica(elemento, operacao){
      let peca = elemento.dataset.peca;
      let estatisticas = document.querySelectorAll("[data-estatistica]");
      for(estatistica of estatisticas){   
         if(operacao ==="+"){
         estatistica.textContent = parseInt(estatistica.textContent) + parseInt(pecas[peca][estatistica.dataset.estatistica]);
         } else if(operacao ==="-"){
            estatistica.textContent = parseInt(estatistica.textContent) - parseInt(pecas[peca][estatistica.dataset.estatistica]);
         }      
      };
}