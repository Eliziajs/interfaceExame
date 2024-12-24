import { Component, input, Input, OnInit, Output, } from '@angular/core';
import { Exame } from '../../domain/exame';
import { ExameService } from '../../core/services/exame.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacienteService } from '../../core/services/paciente.service';
import { Paciente } from '../../domain/Paciente';

@Component({
  selector: 'app-exame-completo',
  templateUrl: './exame-completo.component.html',
  styleUrl: './exame-completo.component.scss'
})
export class ExameCompletoComponent implements OnInit {

  paciente?: Paciente;
  pacientes: Paciente[] = [];
  exames: Exame[] = [];
  exameSelecionado!: Exame;
  pdf: any[] = [];
  //id?: number
  public formExame: FormGroup;


  constructor(
    private service: ExameService,
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,



  ) {

    this.formExame = this.buildFormExame();
  }
  ngOnInit(): void {

    /** const exameId =Number(this.activatedRoute.snapshot.paramMap.get('id'));
   //console.log("exameID:", exameId)  
      this.service.getExameById(exameId).subscribe(
       resposta => this.exames =resposta 
      )*/
    const exameId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    //console.log("exameID:", exameId)  
    this.pacienteService.getPacienteById(exameId).subscribe(
      resposta => this.paciente = resposta
    )
    //this.onDownload1(exameId)
  

  }
  deletarExame() {
    this.service
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
  exameSelectDelete(exames: Exame) {
    this.exameSelecionado = exames;
  }

  private buildFormExame(): FormGroup {
    return this.fb.group({
      id: [null],
      nome: [null]
    })
  }
 /** onDownload(): any {
    return this.pacienteService.getPdfId().subscribe(
      resp => this.paciente = resp

    );
  }*/
  onDownload1(id: any): any {
    return this.pacienteService.getPdfId(id).subscribe({
      next: (value) => {
        console.log("Ok,", value)
      },
      error: (err) => {
        console.log("deu ruim,", err)
      }
    }
    );
 
  }


}