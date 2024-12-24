import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exame } from '../../domain/exame';
import { ExameService } from '../../core/services/exame.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../domain/Paciente';
import { PacienteService } from '../../core/services/paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListMedidas } from '../../domain/ListMedidas';
import { UserService } from '../../core/services/user.service';
import { User } from '../../domain/User';
import { CadastroService } from '../../core/services/cadastro.service';

@Component({
  selector: 'app-lista-exame',
  templateUrl: './lista-exame.component.html',
  styleUrl: './lista-exame.component.scss'
})
export class ListaExameComponent implements OnInit {
  @Output() edit = new EventEmitter()


  user?: User;
  exames: Exame[] = [];
  pacientes: Paciente[] = [];
  exame?: Exame;
  exameSelecionado!: Exame;
  mensagemSucesso!: string;
  mensagemErro!: string;


  constructor(
    private exameService: ExameService,
    private pacienteService: PacienteService,
    private cadastroService: CadastroService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.exameService
      .getExames()
      .subscribe(resposta => this.exames = resposta)
  

    this.pacienteService
      .getPacientes()
      .subscribe(resposta => this.pacientes = resposta)

  }
  exameSelecionaDelecao(paciente: Paciente) {
    this.exameSelecionado = paciente;
  }

  deletarExame() {
    this.pacienteService
      .deletar(this.exameSelecionado)
      .subscribe({
        next: (value) => {
          console.log("Ok,", value)
        },
        error: (err) => {
          console.log("deu ruim,", err)

        }

      })
  }

  onEdit(paciente: Paciente) {
    this.edit.emit(paciente)
  }




}
