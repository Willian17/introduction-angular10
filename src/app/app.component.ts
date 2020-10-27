import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="contador">
      <h1> {{contador}} </h1>
      <button (click)="aumentar()"> +1 </button>
    </div>
      <div class="input">
        <h1> {{mensagem}} </h1>
        <input type="text" (keyup)="setMensagem($event)" /> 
      </div>

  `,
  styles: []
})
export class AppComponent {
  contador = 0;
  mensagem = '';

  public aumentar(){
    this.contador = this.contador + 1
  }
  public setMensagem(event){
    this.mensagem = event.target.value
  }
}
