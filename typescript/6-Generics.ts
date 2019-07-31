import Concessionaria from './classes/Concessionaria';
import Pessoa from './classes/Pessoa';
import Dao from './classes/DaoInterfaceGeneric';

//let dao: ConcessionariaDao = new ConcessionariaDao();
//let daoPessoa: PessoaDao = new PessoaDao();
let concessionaria = new Concessionaria('Avenida Brasil',[]);
let pessoa = new Pessoa('João','Monza');


let dao3 : Dao<Concessionaria> = new Dao<Concessionaria>();

dao3.inserir(concessionaria);

dao3.remover(4);

