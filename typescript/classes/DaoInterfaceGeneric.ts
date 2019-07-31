import DaoInterfaceGeneric from '../interfaces/DaoInterfaceGeneric'

export default class Dao<T> implements DaoInterfaceGeneric<T>{
    nomeTabela: string = ''

    public inserir(object: T): boolean{
        console.log('logica inserir');
        return true;
    }

    public atualizar(object: T): boolean{
        console.log('logica atualizar');
        return true;
    }
    
    public remover(id: Number): T{
        console.log('logica remover');
        return Object();
    }

    public selecionar(object: any): T{
        console.log('logica selecionar');
        return Object();
    }

    public selecionarTodos(): [T]{
        console.log('logica selecionar todos');
        return [Object()];
    }
}