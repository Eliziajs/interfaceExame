import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../domain/User';
import { UserService } from '../../core/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  user?: User;
    
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,

    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [null],
            password: [null]
        })
      /**   const exameId =Number(this.activatedRoute.snapshot.paramMap.get('id'));
      //console.log("exameID:", exameId)  
         this.pacienteService.getExameById(exameId).subscribe(
          resposta => this.paciente =resposta 
         )*/
    }
    
    login() {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      
      this.authService.autenticar(email, password).subscribe({
          
          next: (value) => {

              console.log('Login realizado com sucesso', value);
              this.router.navigate(['/'])
              this.loginForm.reset()
          },
          error: (err) => {
              console.log('Erro no login', err)
          }
      })

      
  }
}

