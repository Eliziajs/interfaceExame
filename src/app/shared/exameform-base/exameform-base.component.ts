import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ExameService } from '../../core/services/exame.service';
import { Exame } from '../../domain/exame';
import { PacienteService } from '../../core/services/paciente.service';

import { ListMedidasService } from '../../core/services/list-medidas.service';
import { ListMedidas } from '../../domain/ListMedidas';
import { Paciente } from '../../domain/Paciente';


@Component({
  selector: 'app-exameform-base',
  templateUrl: './exameform-base.component.html',
  styleUrl: './exameform-base.component.scss'
})
export class ExameformBaseComponent {




 //variaveis de listas descritivas
  getMedidasCavitaria: string[]=[]
  getMedidasVE: string[]=[]
  getFuncaoSistolica: string[]=[]
  getContratilidadeSegmentar: string[]=[]
  getFuncaoDiastolica: string[]=[]
  getCavidadesDireitas: string[]=[]
  getAorta: string[]=[]
  getValvulaAortica: string[]=[]
  getMitral: string[]=[]
  getTricuspide: string[]=[]
  getValvulaPulmonar: string[]=[]
  getPericardio: string[]=[]
  getCava: string[]=[]


  formExame!: FormGroup;
  formPaciente!:FormGroup;
  exame!:Exame;
  paciente?:Paciente;
  cpf!:string
  
 

  @Input() editComponent!:boolean; 
  //titulo = input<String>("Insira os dados do paciente");
  @Input() titulo: string ="Novo exame";
  @Input() subTitulo_1: String = "Insira os dados do paciente";
  @Input() subTitulo_2: String = "Insira as Medidas Numéricas";
  @Input() subTitulo_3: String = "Insira as Medidas Descritivas";
  @Input() textoBotao: string = "PESQUISAR";
  @Input() perfilComponent!: boolean;
  @Output()acaoClique: EventEmitter<any> = new EventEmitter<any>()
  

  constructor(
    private formBuilder: FormBuilder,
    private exameService: ExameService,
    private pacienteService: PacienteService,
    private listService: ListMedidasService,
  
  ) {
    
   }

  ngOnInit() {
  
    
    this.formPaciente = this.formBuilder.group({
     //id:[null],
      nome: [null],
      idade:[null],
      email:[null],
      sexo:[null],
      cpf:[null],
      peso:[null],
      altura:[null]   
    });
    this.pacienteService.setForm(this.formPaciente)
      

    this.formExame = this.formBuilder.group({
      id_paciente:[null],
      ao:[null],
      ae:[null],
      vid:[null],
      ved:[null],
      ves:[null],
      siv:[null],
      pp:[null],
      fracaoEjecao:[null],
      e:[null],
      eLinha:[null],
      medidasCavitarias:[null],
      medidasVE:[null],
      funcaoSistolica:[null],
      contratilidadeSegmentar:[null],
      funcaoDiastolica:[null],
      cavidadesDireita:[null],
      aorta:[null],
      valvulaAortica:[null],
      valvulaMitral:[null],
      tricuspide:[null],
      valvulaPulmonar:[null],
      pericardio:[null],
      cava:[null],
      comentario:[null],
    });
    this.exameService.setForm(this.formExame),
   

   //services de lista de medidas descritivas
    this.getMedidasCavitaria=this.listService.getMedidasCavitaria(),
    this.getMedidasVE = this.listService.getMedidasVE(),
    this.getFuncaoSistolica = this.listService.getFuncaoSistolica(),
    this.getContratilidadeSegmentar = this.listService.getContratilidadeSegmentar()
    this.getFuncaoDiastolica = this.listService.getFuncaoDiastolica()
    this.getCavidadesDireitas = this.listService.getCavidadesDireitas()
    this.getAorta = this.listService.getAorta()
    this.getValvulaAortica = this.listService.getValvulaAortica()
    this.getMitral = this.listService.getMitral()
    this.getTricuspide = this.listService.getTricuspide()
    this.getValvulaPulmonar = this.listService.getValvulaPulmonar()
    this.getPericardio = this.listService.getPericardio()
    this.getCava = this.listService.getCava()


    
   this.getInputCPF();

  }
  executarAcao(){
    this.acaoClique.emit();
  }
  formCpf = new FormGroup({
    cpf: new FormControl()
  });
  getInputCPF(){
    let cpf = this.formCpf.get('cpf')?.value;
    console.log(cpf)
    this.pacienteService.getPacienteById(cpf).subscribe(
      {
        next: (value) => {
          console.log('cadastro realizado com sucesso', value)
        },
        error: (err) => {
          console.log('Erro ao cadastrar', err)
        }
      }
    ) 
  }
  
  
  
 
  

  /**cadastrarExame(){
    const exame = this.formExameService.getForm();
    console.log("cadastro feito", exame )
 /**  this.exame.nome = this.formExame.value.nome;
    this.exame.idade = this.formExame.value.idade;
    
    this.formExameService.salvar(this.exame).subscribe({
      next:   (value) =>{
        console.log('cadastro realizado com sucesso', value)
      },
      error: (err) =>{
        console.log('Erro ao cadastrar',err)
      }
    })
 
   

  }**/

}


//erro no aceitar termos, sem checkbox não é ngClass


