export default interface DaoInterfaceGeneric<T>{
    nomeTabela: String

    inserir(object: T): boolean
    atualizar(object: T): boolean
    remover(id: Number): T
    selecionar(id: Number): T
    selecionarTodos(): [T]
}