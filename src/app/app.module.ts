import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { FormExameComponent } from './pages/form-exame/form-exame.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginComponent } from './pages/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { ListaExameComponent } from './pages/lista-exame/lista-exame.component';
import { ExameCompletoComponent } from './pages/exame-completo/exame-completo.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { ExameformBaseComponent } from './shared/exameform-base/exameform-base.component';
import { EditExameComponent } from './pages/edit-exame/edit-exame.component';
import { TESTEComponent } from './teste/teste.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarrousselComponent } from './shared/carroussel/carroussel.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MatTableModule } from '@angular/material/table';
import { autenticationInterceptor } from './core/interceptor/autentication.interceptor';



@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    FormExameComponent,
    LoginComponent,
    CadastroComponent,
    ListaExameComponent,
    ExameCompletoComponent,
    FormBaseComponent,
    ExameformBaseComponent,
    EditExameComponent,
    TESTEComponent,
    CarrousselComponent,
    PerfilComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTableModule,
    MatAutocompleteModule
    

  ],
  providers: [
    provideAnimationsAsync(),
   
    provideHttpClient(
      withInterceptors([
        autenticationInterceptor
      ]),
      withInterceptorsFromDi()
    )
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
