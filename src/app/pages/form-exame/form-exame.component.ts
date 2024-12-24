import { Component, Input, OnInit, signal } from '@angular/core';
import { ExameService } from '../../core/services/exame.service';
import { FormControl, FormGroup,FormsModule } from '@angular/forms';
import { Exame } from '../../domain/exame';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../domain/Paciente';
import { PacienteService } from '../../core/services/paciente.service';
import { ListMedidas } from '../../domain/ListMedidas';
import { FormularioService } from '../../core/services/formulario.service';
import { getActiveConsumer } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrl: './form-exame.component.scss',
})


export class FormExameComponent implements OnInit{


  protected readonly value = signal('');
  formExame!: FormGroup;
  formPac?:FormGroup<any> | null;
  cadastro!: Paciente;
  router!: Router;
  perfilComponent = false;
  id: any
  cpf = new FormControl('')
  formCpf!: FormControl


  constructor(
    private exameService: ExameService,
    private pacienteService: PacienteService,
    private formularioService: FormularioService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {
   
   /**  const obj =this.pacienteService.getPacienteById(this.id).
      subscribe(cadastro=>{
        this.carregarForm()
        
      }
    )**/
    //const c= Number(this.activatedRoute.snapshot.paramMap.get('cpf'));
   // console.log(c)
   
  }
  carregarForm(){
    this.formPac = this.formularioService.getCadastro();
    this.formPac?.patchValue({
      id:this.cadastro.id,
      name: this.cadastro.nome,
      idade:this.cadastro.idade,
      email: this.cadastro.email,
      cpf:this.cadastro.cpf,
      sexo: this.cadastro.sexo,
      peso:  this.cadastro.peso,
      altura: this.cadastro.altura,
      
    });
  }
  //NAO CONSIGO TRAZER O DADO CPF PARA VERIFICAR
  
    cadastrarPaciente(){}
    OnAcaoClique(){

    }

  }

  
  /**cadastrarExame() {

    const formExame = this.exameService.getForm();
    console.log("cadastro Exame feito", formExame );
    const formPaciente = this.exameService.getForm();
    console.log("cadastro Paciente feito", formPaciente );

    if (formExame?.valid && formPaciente?.valid) {
      const novoExame = formExame.getRawValue() as Exame //&& formPaciente.getRawValue() as Paciente;
      this.exameService.salvar(novoExame).subscribe({
        next: (value) => {
          console.log('cadastro realizado com sucesso', value)
        },
        error: (err) => {
          console.log('Erro ao cadastrar', err)
        }
      })
      const novoExame1 =formPaciente.getRawValue() as Paciente
      this.pacienteService.salvar(novoExame1).subscribe({
        next: (value) => {
          console.log('cadastro realizado com sucesso', value)
        },
        error: (err) => {
          console.log('Erro ao cadastrar', err)
        }
      })
    }
  }**/

  
  

    
