import ConcessionariaDao from './dao/ConcessionariaDao';
import Concessionaria from './classes/Concessionaria';
import Pessoa from './classes/Pessoa';
import PessoaDao from './dao/PessoaDao';

let dao: ConcessionariaDao = new ConcessionariaDao();
let daoPessoa: PessoaDao = new PessoaDao();
let concessionaria = new Concessionaria('Avenida Brasil',[]);

let pessoa = new Pessoa('João','Monza');

dao.inserir(concessionaria);

daoPessoa.atualizar(pessoa);
