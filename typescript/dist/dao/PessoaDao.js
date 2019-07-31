"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("../classes/Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('logica inserir');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica deletar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (object) {
        console.log('logica selecionar');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;
