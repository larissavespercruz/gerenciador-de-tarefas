import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

 @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
 public tarefa:Tarefa = new Tarefa;
  constructor(
    private tarefaService:TarefaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa;
  }

  cadastrar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
