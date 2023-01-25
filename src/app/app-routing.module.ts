import { RecoverPasswordComponent } from './../pages/recover-password/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './../pages/forgot-password/forgot-password/forgot-password.component';
import { ErrorPageComponent } from './../pages/error-page/error-page/error-page.component';
import { UserConfirmComponent } from './../pages/user-confirm/user-confirm/user-confirm.component';
import { AdminPageComponent } from './../pages/admin-page/admin-page/admin-page.component';
import { RegisterPageComponent } from './../pages/register-page/register-page.component';
import { LoginPageComponent } from './../pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
{ path: 'login', component: LoginPageComponent},
{ path: 'register', component: RegisterPageComponent },
{ path: 'admin', component: AdminPageComponent },
{path: 'user-confirm/:token', component: UserConfirmComponent},
{path: 'forgot-password', component: ForgotPasswordComponent},
{path: 'recover-password/:token', component: RecoverPasswordComponent},
{ path: '',  canActivate: [AuthGuard], component: HomeComponent},
{path: '**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
