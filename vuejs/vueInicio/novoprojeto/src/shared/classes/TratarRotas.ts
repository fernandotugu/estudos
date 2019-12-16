class TratarRotas{

    public adicionarFilhos(rotaPai:any,rotasFilhas:any){
        if(rotasFilhas.length>0){
            for(let i in rotasFilhas){
                rotaPai.children.push(rotasFilhas[i]);
            }
        }
    }

    public montarRotas(rotasAplicacao:any){
        var rotas:any = [];
        if(rotasAplicacao.length>0){
            for(let i in rotasAplicacao){
                rotas = rotas.concat(rotasAplicacao[i]);
            }
        }
        return rotas;
    }


}

export default new TratarRotas();