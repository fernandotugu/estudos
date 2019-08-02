import { Component, OnInit , EventEmitter, Output, OnDestroy} from '@angular/core';

import Frase from '../shared/frase.model'
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {  
    //console.log(this.frases)
    this.atualizaRodada();
    //console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Componete painel foi destruido');
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void{
    //console.log('Verificar Resposta:'+this.resposta)
    if(this.tentativas===0){
      this.encerrarJogo.emit('derrota')
      //alert('Você perdeu todas as tentativas.');  
    }
    else{
      if(this.rodadaFrase.frasePtBr==this.resposta){
        alert('Tradução correta');
        this.progresso = this.progresso + (100/ this.frases.length);
        this.rodada++;//trocar Rodada

        if(this.rodada === 4){
          this.encerrarJogo.emit('vitória')
          //alert("Concluiu as traduções com sucesso")
        }
        this.atualizaRodada();
      }
      else{
          this.tentativas--;
          if(this.tentativas<=0){
            this.encerrarJogo.emit('derrota')
            //alert('Você perdeu todas as tentativas.');  
          }
          else{
            //alert('Tradução incorreta.');  
          }
      }
    }
  }
  

  private atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
