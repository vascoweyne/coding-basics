console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Fortaleza`, `São Paulo`, `Natal`);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Fortaleza";

console.log('\n Destinos possiveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
  
let contador = 0;
let destinoExiste = false;

while (contador<3){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true
    break;
  }
  contador += 1;
}

console.log("Destino existe", destinoExiste);

if (podeComprar && destinoExiste){
  console.log("Boa viagem");
}else{
  console.log("Desculpe tivemos um erro");
}

for (let i = 0 ; i < 3 ; i++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
  }
}