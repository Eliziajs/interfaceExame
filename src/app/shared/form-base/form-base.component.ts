import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../core/services/cadastro.service';
import { FormularioService } from '../../core/services/formulario.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent implements OnInit {


  cadastroForm!: FormGroup;
  
  @Input() perfilComponent: boolean = false;
  @Input() titulo: string = 'Crie sua conta';
  @Input() textoBotao: string = 'CADASTRAR';
  @Output() acaoclique: EventEmitter<any> = new EventEmitter<any>()
  @Output() sair: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: ['Silva', Validators.required],
      cpf: ['123456789123', [Validators.required]],
      crm: ['526489578', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['21979229556', Validators.required],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo("email")]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo("password")]],
      aceitarTermos: [false, [Validators.requiredTrue]]
    });



    if (this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null)
    } else {
      this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue])

    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm)
  
  }

  executarAcao() {
    this.acaoclique.emit();
  }

  logout(){
    this.sair.emit();
  }
}


