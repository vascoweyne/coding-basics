console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
  `Fortaleza`,
  `São Paulo`,
  `Natal`,
);

listaDeDestinos.push(`Rio de Janeiro`) //adiciona um item na lista
console.log("Destinos possiveis:");
//console.log(fortaleza, saoPaulo, natal);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1],listaDeDestinos[0]);