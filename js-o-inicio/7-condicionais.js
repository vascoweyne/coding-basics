console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Fortaleza`, `São Paulo`, `Natal`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;


console.log('Destinos possiveis:');
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log('Comprardor maior de idade');
//   listaDeDestinos.splice(1, 1); // removendo o item
// } else if (estaAcompanhada == true) {
//   console.log('Comprardor esta acompanhado do maior de idade');
//   listaDeDestinos.splice(1, 1) // removendo o item
// } else {
//   console.log('Não é maior de idade e não posso vender');
// }

if (estaAcompanhada == true || idadeComprador >= 20) {
  console.log('Comprardor maior de idade');
  listaDeDestinos.splice(2, 1) // removendo o item
} else {
  console.log('Não é maior de idade e não posso vender');
}

console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada){
  console.log("Boa Viagem");
}else{
  console.log("Você não pode embarcar");  
}



console.log(listaDeDestinos);
