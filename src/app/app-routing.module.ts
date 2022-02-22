import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthLoginGuard } from './gard/auth-login.guard';

const routes: Routes = [
  { path: "connexion", component: LoginComponent },
  { path: "", component: SignInComponent },
  { path: "profil", component: ProfilComponent, canActivate: [AuthLoginGuard] },
  { path: "actualite", component: ActualiteComponent, canActivate: [AuthLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
