import Carro from './Carro';
import ConcessionariaInterface from '../interfaces/ConcessionariaInterface';

export default class Concessionaria implements ConcessionariaInterface{

    private endereco : string
    private listaDeCarros: Array<Carro>

    constructor(endereco : string,listaCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }

    public fornecerEndereco(): string{
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros;
    }

    public fornecerHorarioFuncionamento(): string{
        return 'De segunda a sexta das  8:00 as 18:00 e sábado das 08:00 as 12:00';
    }

}