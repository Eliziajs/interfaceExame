import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/User';
import { CadastroService } from '../../core/services/cadastro.service';
import { FormularioService } from '../../core/services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {

  perfilComponent = false;
  user!: User

  constructor(
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router

  ) { }
  ngOnInit(): void {
  


  }

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro()
  
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
  }
}