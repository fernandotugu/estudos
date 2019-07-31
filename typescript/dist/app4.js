"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./classes/Carro"));
var Moto_1 = __importDefault(require("./classes/Moto"));
var Concessionaria_1 = __importDefault(require("./classes/Concessionaria"));
var carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
carro.acelerar();
var moto = new Moto_1.default('Kavazaki');
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
var concessionaria = new Concessionaria_1.default('Avenida Faria Lima', [carro]);
console.log(concessionaria.fornecerHorarioFuncionamento());
