import Carro from './classes/Carro';
import Pessoa from './classes/Pessoa';
import Concessionaria from './classes/Concessionaria';

let carroA = new Carro('Meriva',4);
let carroB = new Carro('Agile',4);
let carroC = new Carro('Celta',4);

/* carros concessionaria */
let listaCarros : Carro[] = [carroA,carroB,carroC];
//let listaCarros : Array<Carro> = [carroA,carroB,carroC];

carroA.acelerar();

console.log(carroA);
carroA.acelerar();
carroA.apelido = 'Poçante';
console.log(carroA);


let concessionaria = new Concessionaria('Avenida Faria Lima',listaCarros);
console.log(concessionaria);
concessionaria.mostrarListaDeCarros();


let pessoa = new Pessoa("Fernando Tugu","Corolla");
pessoa.dizerNome();
pessoa.dizerCarroPreferido();
pessoa.comprarCarro(carroA);
console.log(pessoa);


let cliente = new Pessoa("Roberto","Celta");

console.log('Cliente');
console.log(cliente);

concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
    if(carro.dizerModelo() == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);
    }
    //console.log(carro);
})
console.log(cliente);