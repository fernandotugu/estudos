import DaoInterface from '../interfaces/DaoInterface';
import Pessoa from '../classes/Pessoa'

export default class PessoaDao implements DaoInterface{

    nomeTabela: String = 'tb_pessoa'

    public inserir(object: Pessoa): boolean{
        console.log('logica inserir');
        return true;
    }

    public atualizar(object: Pessoa): boolean{
        console.log('logica atualizar');
        return true;
    }
    
    public remover(id: Number): Pessoa{
        console.log('logica deletar');
        return new Pessoa('','');
    }

    public selecionar(object: any): Pessoa{
        console.log('logica selecionar');
        return new  Pessoa('','');
    }

    public selecionarTodos(): [Pessoa]{
        console.log('logica selecionar todos');
        return [new  Pessoa('','')];
    }
        
}