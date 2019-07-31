"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("../classes/Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica inserir');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica deletar');
        return new Carro_1.default('', 4);
    };
    CarroDao.prototype.selecionar = function (object) {
        console.log('logica selecionar');
        return new Carro_1.default('', 4);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return [new Carro_1.default('', 4)];
    };
    return CarroDao;
}());
exports.default = CarroDao;
