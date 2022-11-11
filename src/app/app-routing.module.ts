import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorListadoComponent } from './jugadores/jugador-listado/jugador-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PassComponent } from './componentes/pass/pass.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { VerificarMailComponent } from './componentes/verificar-mail/verificar-mail.component';
import { Reporte1Component } from './componentes/reportes/reporte1/reporte1.component';

const routes: Routes = [
  {path: '', redirectTo: '/login' ,pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent, },
  {path: 'jugar', component: JugadorListadoComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'olvidoContraseña', component:PassComponent},
  {path: 'verificar-mail', component: VerificarMailComponent},
  {path: 'reportes', component: Reporte1Component},
  {path: '**', redirectTo: '/login' ,pathMatch: 'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
