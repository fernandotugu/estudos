"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica inserir');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica remover');
        return Object();
    };
    Dao.prototype.selecionar = function (object) {
        console.log('logica selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica selecionar todos');
        return [Object()];
    };
    return Dao;
}());
exports.default = Dao;
