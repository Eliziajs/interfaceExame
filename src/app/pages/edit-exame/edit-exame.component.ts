import { Component, OnInit,  } from '@angular/core';
import { ExameService } from '../../core/services/exame.service';
import { Exame } from '../../domain/exame';
import { TokenService } from '../../core/services/token.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-exame',
  templateUrl: './edit-exame.component.html',
  styleUrl: './edit-exame.component.scss'
})
export class EditExameComponent implements OnInit {

  public formExame: FormGroup;
  titulo = "Edite este exame";
  subTitulo_1: String = "Edite os dados do paciente";
  subTitulo_2: String = "Edite as Medidas Numéricas";
  subTitulo_3: String = "Edite as Medidas Descritivas";
  //perfilComponent = true;
  exame?: Exame

  textoBotao = "ATUALIZAR";

  token = '';
  nome = '';

 //@Input() formExame: FormGroup<any>;
 //@Output() formExame: FormGroup<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private exameService: ExameService,
    private fb: FormBuilder
  ) { 

    this.formExame = this.buildFormExame();
  }
  ngOnInit(): void {
    const exameId =Number(this.activatedRoute.snapshot.paramMap.get('id_exame'));
   // console.log("exameID:", exameId)
    
      this.exameService
      .getExameById(exameId)
      .subscribe(
      response =>this.exame = response,
      )
   }
   private buildFormExame():FormGroup{
     return this.fb.group({
      id:[null],
      nome: [null],
      idade:[null],
      email:[null],
      sexo:[null],
      peso:[null],
      altura:[null],
     // id:[(this.exame && this.exame.id)?this.exame.id:null],
      ao:[(this.exame && this.exame.ao)?this.exame.ao:null],
      ae:[3],
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

     })
     
   }
  /** const formCadastro = this.formularioService.getCadastro()
  
   if(formCadastro?.valid) {
     const novoCadastro = formCadastro.getRawValue() as User;
     this.cadastroService.salvar(novoCadastro).subscribe({
       next: (value) => {
         console.log('Cadastro realizado com sucesso', value);
         this.router.navigate(['/login'])
       },
       error: (err) => {
         console.log('Erro ao realizar cadastro', err)
       }
     })
   }
 }**/

}
