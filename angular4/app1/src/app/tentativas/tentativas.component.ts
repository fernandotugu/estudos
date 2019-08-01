import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Coracao } from 'app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {

  @Input() public tentativas : number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    //console.log(this.coracoes);
  }

  ngOnInit() {
    //console.log('tentativas recebidas:'+this.tentativas);
  }

  ngOnChanges(){
    if(this.tentativas!== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
    //console.log('tentativas restantes:'+this.tentativas);
  }
 
}
