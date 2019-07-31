"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = __importDefault(require("./dao/ConcessionariaDao"));
var Concessionaria_1 = __importDefault(require("./classes/Concessionaria"));
var Pessoa_1 = __importDefault(require("./classes/Pessoa"));
var PessoaDao_1 = __importDefault(require("./dao/PessoaDao"));
var dao = new ConcessionariaDao_1.default();
var daoPessoa = new PessoaDao_1.default();
var concessionaria = new Concessionaria_1.default('Avenida Brasil', []);
var pessoa = new Pessoa_1.default('João', 'Monza');
dao.inserir(concessionaria);
daoPessoa.atualizar(pessoa);
