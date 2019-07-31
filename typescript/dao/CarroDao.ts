import DaoInterface from '../interfaces/DaoInterface';
import Carro from '../classes/Carro'

export default class CarroDao implements DaoInterface{

    nomeTabela: String = 'tb_carro'

    public inserir(object: Carro): boolean{
        console.log('logica inserir');
        return true;
    }

    public atualizar(object: Carro): boolean{
        console.log('logica atualizar');
        return true;
    }
    
    public remover(id: Number): Carro{
        console.log('logica deletar');
        return new Carro('',4);
    }

    public selecionar(object: any): Carro{
        console.log('logica selecionar');
        return new  Carro('',4);
    }

    public selecionarTodos(): [Carro]{
        console.log('logica selecionar todos');
        return [new  Carro('',4)];
    }
        
}