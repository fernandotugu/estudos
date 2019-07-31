"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("../classes/Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_Moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('logica inserir');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica deletar');
        return new Moto_1.default('');
    };
    MotoDao.prototype.selecionar = function (object) {
        console.log('logica selecionar');
        return new Moto_1.default('');
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return [new Moto_1.default('')];
    };
    return MotoDao;
}());
exports.default = MotoDao;
