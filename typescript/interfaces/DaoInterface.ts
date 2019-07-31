export default interface DaoInterface{
    nomeTabela: String

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: Number): any
    selecionar(id: Number): any
    selecionarTodos(): [any]
}