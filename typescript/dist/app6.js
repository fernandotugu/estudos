"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./classes/Concessionaria"));
var Pessoa_1 = __importDefault(require("./classes/Pessoa"));
var Dao_1 = __importDefault(require("./class_generics/Dao"));
//let dao: ConcessionariaDao = new ConcessionariaDao();
//let daoPessoa: PessoaDao = new PessoaDao();
var concessionaria = new Concessionaria_1.default('Avenida Brasil', []);
var pessoa = new Pessoa_1.default('João', 'Monza');
var dao3 = new Dao_1.default();
dao3.inserir(concessionaria);
dao3.remover(4);
