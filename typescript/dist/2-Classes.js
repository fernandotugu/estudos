"use strict";
var Carros = /** @class */ (function () {
    function Carros(modelo, numeroDePorta) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.apelido = "";
        this.numeroDePorta = numeroDePorta;
    }
    Carros.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carros.prototype.dizerModelo = function () {
        return this.modelo;
    };
    Carros.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carros.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carros;
}());
var Concessionarias = /** @class */ (function () {
    function Concessionarias(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }
    Concessionarias.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionarias.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionarias;
}());
var Pessoas = /** @class */ (function () {
    function Pessoas(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoas.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoas.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoas.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoas;
}());
var carroA = new Carros('Meriva', 4);
var carroB = new Carros('Agile', 4);
var carroC = new Carros('Celta', 4);
/* carros concessionaria */
var listaCarros = [carroA, carroB, carroC];
//let listaCarros : Array<Carro> = [carroA,carroB,carroC];
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.apelido = 'Poçante';
console.log(carroA);
var concessionaria = new Concessionarias('Avenida Faria Lima', listaCarros);
console.log(concessionaria);
concessionaria.mostrarListaDeCarros();
var pessoa = new Pessoas("Fernando Tugu", "Corolla");
pessoa.dizerNome();
pessoa.dizerCarroPreferido();
pessoa.comprarCarro(carroA);
console.log(pessoa);
var cliente = new Pessoas("Roberto", "Celta");
console.log('Cliente');
console.log(cliente);
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.dizerModelo() == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    //console.log(carro);
});
console.log(cliente);
