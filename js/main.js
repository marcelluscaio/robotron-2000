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

const cores = ["Vermelho", "Amarelo", "Azul", "Branco", "Preto", "Rosa"];

const botoes = document.querySelectorAll(".controle-ajuste");
const botoesCores = document.querySelectorAll(".seletor--botao");
const caixaCores = document.querySelector(".robotron--seletor--caixa");
let contador = 0;

function preencheCaixaCores(contador){
   caixaCores.value=cores[contador];
}
preencheCaixaCores(contador);

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


botoesCores.forEach((botao) => {
   botao.addEventListener("click", (e) => {      
      atualizaRobo(trocaCor(e.target));
   }); 
})

function trocaCor(botao){
   if(botao.dataset.direcao === "esquerda"){
      contador--   
   } else if(botao.dataset.direcao === "direita"){
      contador++
   }
   if(contador<0){
      contador = cores.length-1;   
   } else if (contador===cores.length){
      contador = 0;
   }
   preencheCaixaCores(contador);
   return caixaCores.value
};

function atualizaRobo(cor){
   let robo = document.querySelector(".robo");
   robo.src = `img/Robotron 2000/Robotron 2000 - ${caixaCores.value}/robotron.png`
}