import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Fuleco",11122233309);
const cliente2 = new Cliente("Bravo", 88822233309);

 
const contaCorrenteFuleco = new ContaCorrente(1001,cliente1);
contaCorrenteFuleco.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteFuleco.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);