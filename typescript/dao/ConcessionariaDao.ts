import DaoInterface from '../interfaces/DaoInterface';
import Concessionaria from '../classes/Concessionaria'

export default class ConcessionariaDao implements DaoInterface{

    nomeTabela: String = 'tb_concessionaria'

    public inserir(object: Concessionaria): boolean{
        console.log('logica inserir');
        return true;
    }

    public atualizar(object: Concessionaria): boolean{
        console.log('logica atualizar');
        return true;
    }
    
    public remover(id: Number): Concessionaria{
        console.log('logica deletar');
        return new Concessionaria('Avenida',[]);
    }

    public selecionar(object: any): Concessionaria{
        console.log('logica selecionar');
        return new Concessionaria('Avenida',[]);
    }

    public selecionarTodos(): [Concessionaria]{
        console.log('logica selecionar todos');
        return [new Concessionaria('Avenida',[])];
    }
        
}