import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/User';
import { TokenService } from '../../core/services/token.service';
import { CadastroService } from '../../core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from '../../core/services/formulario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit{
  titulo = 'Olá! ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  token = '';
  name?:string;
  cadastro!: User;
  form!:FormGroup<any> | null;
  id=''

 constructor(
  private tokenService: TokenService,
  private cadastroService: CadastroService,
  private formularioService: FormularioService,
  private userService: UserService,
  private router: Router,
  private activeRouter: ActivatedRoute

  ){}

  ngOnInit() {
   this.token = this.tokenService.retornarToken();
    console.log("token",this.token)
    this.id = this.tokenService.retornarId();
    console.log("id", this.id)
    this.name = this.tokenService.retornarName();
    console.log("name", this.name)
    this.cadastroService.getExameById(1).subscribe(cadastro =>{
      this.cadastro = cadastro;
      console.log("Este é o cadastro",this.cadastro)
      this.name = cadastro.name
      this.carregarForm();
    
    })
  }
  //corrigir problema de autenticação
  carregarForm(){
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      name: this.cadastro.name,
      lastName: this.cadastro.lastName,
      cpf:this.cadastro.cpf,
      genero: this.cadastro.genero,
      email: this.cadastro.email,
      password:  this.cadastro.password,
      telefone: this.cadastro.telefone,
      crm:  this.cadastro.crm
    });
   //console.log("Carregar......",this.form,this.name)
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  atualizar(){
    console.log("atualizado")
      const dadosAtualizados = {
        name: this.form?.value.name,
        lastName: this.form?.value.lastName,
        cpf: this.form?.value.cpf,
        genero: this.form?.value.genero,
        email: this.form?.value.email,
        password: this.form?.value.password,
        telefone: this.form?.value.telefone,
        crm: this.form?.value.crm
      }
      this.cadastroService.editarCadastro(dadosAtualizados,6)
      .subscribe({
        next: ()=> {
          alert('cadastro editado com sucesso')
          this.router.navigate(['/'])
        },
        error: (err) =>{
          console.log(err)
        }
      })
 
  }
 
}
