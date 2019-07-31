import Carro from './classes/Carro';
import Moto from './classes/Moto';
import Concessionaria from './classes/Concessionaria';

let carro  = new Carro('Veloster',3);

carro.acelerar();
carro.acelerar();

let moto  = new Moto('Kavazaki');

moto.acelerar();
moto.acelerar();

console.log(carro);
console.log(moto);

let concessionaria = new Concessionaria('Avenida Faria Lima',[carro]);

console.log(concessionaria.fornecerHorarioFuncionamento());