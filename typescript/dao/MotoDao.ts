import DaoInterface from '../interfaces/DaoInterface';
import Moto from '../classes/Moto'

export default class MotoDao implements DaoInterface{

    nomeTabela: String = 'tb_Moto'

    public inserir(object: Moto): boolean{
        console.log('logica inserir');
        return true;
    }

    public atualizar(object: Moto): boolean{
        console.log('logica atualizar');
        return true;
    }
    
    public remover(id: Number): Moto{
        console.log('logica deletar');
        return new Moto('');
    }

    public selecionar(object: any): Moto{
        console.log('logica selecionar');
        return new  Moto('');
    }

    public selecionarTodos(): [Moto]{
        console.log('logica selecionar todos');
        return [new  Moto('')];
    }
        
}