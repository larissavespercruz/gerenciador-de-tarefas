import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
//gera um atributo html, ao invés do component que gera uma página html
//usado para aplicar uma operação especifica em um component 
export class TarefaConcluidaDirective {

  @Input() tarefaConcluida!:boolean;
  constructor(private el:ElementRef) {

   }

   ngOnInit(){
     if(this.tarefaConcluida){
       this.el.nativeElement.style.textDecoration = "line-through"
     }
   }

}
