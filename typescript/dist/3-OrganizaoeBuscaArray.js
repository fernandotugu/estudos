"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./classes/Carro"));
var Pessoa_1 = __importDefault(require("./classes/Pessoa"));
var Concessionaria_1 = __importDefault(require("./classes/Concessionaria"));
var carroA = new Carro_1.default('Meriva', 4);
var carroB = new Carro_1.default('Agile', 4);
var carroC = new Carro_1.default('Celta', 4);
/* carros concessionaria */
var listaCarros = [carroA, carroB, carroC];
//let listaCarros : Array<Carro> = [carroA,carroB,carroC];
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.apelido = 'Poçante';
console.log(carroA);
var concessionaria = new Concessionaria_1.default('Avenida Faria Lima', listaCarros);
console.log(concessionaria);
concessionaria.mostrarListaDeCarros();
var pessoa = new Pessoa_1.default("Fernando Tugu", "Corolla");
pessoa.dizerNome();
pessoa.dizerCarroPreferido();
pessoa.comprarCarro(carroA);
console.log(pessoa);
var cliente = new Pessoa_1.default("Roberto", "Celta");
console.log('Cliente');
console.log(cliente);
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.dizerModelo() == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    //console.log(carro);
});
console.log(cliente);
