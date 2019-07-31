export default class Veiculo{

    protected modelo: string = ''
    public apelido: string = ''
    protected velocidade: number = 0

    public acelerar(): void{
        this.velocidade = this.velocidade+10;
    }

    public dizerModelo(): string{
        return this.modelo;
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade;
    }
   
}

export let qualquer_coisa: string = 'teste'