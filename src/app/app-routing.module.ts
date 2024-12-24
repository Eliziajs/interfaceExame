import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormExameComponent } from './pages/form-exame/form-exame.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaExameComponent } from './pages/lista-exame/lista-exame.component';
import { ExameCompletoComponent } from './pages/exame-completo/exame-completo.component';
import { EditExameComponent } from './pages/edit-exame/edit-exame.component';
import { TESTEComponent } from './teste/teste.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { autenticationInterceptor } from './core/interceptor/autentication.interceptor';
import { authGuard } from './core/guards/auth.guard';
import { userResolver } from './core/resolvers/user.resolver';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'formExame',
    component:FormExameComponent
  },
  {
    path:'formExame/:id-??',
    component:FormExameComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'perfil',
    component:PerfilComponent, 
    canActivate:[authGuard],data:{acesso:"user"}

  },
  {
    path:'perfil/:id',
    component:PerfilComponent, 
    canActivate:[authGuard],
    data:{acesso:"user"}

  },
  {
    path:'cadastro',
    component:CadastroComponent,
   
  },
  {
    path:'pacientes',
    component:ListaExameComponent
  },
  {
    path:'exameCompleto',
    component:ExameCompletoComponent
  },
  {
    path:'exameCompleto/:id',
    component:ExameCompletoComponent
  },
  {
    path:'edit/:id_exame',
    component:EditExameComponent
  },
  {
    path:'t',
    component:TESTEComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
