"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("../classes/Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('logica inserir');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica deletar');
        return new Concessionaria_1.default('Avenida', []);
    };
    ConcessionariaDao.prototype.selecionar = function (object) {
        console.log('logica selecionar');
        return new Concessionaria_1.default('Avenida', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return [new Concessionaria_1.default('Avenida', [])];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
