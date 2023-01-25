import { RecoverPasswordComponent } from './../pages/recover-password/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './../pages/forgot-password/forgot-password/forgot-password.component';
import { ErrorPageComponent } from './../pages/error-page/error-page/error-page.component';
import { UserConfirmComponent } from './../pages/user-confirm/user-confirm/user-confirm.component';
import { AdminPageComponent } from './../pages/admin-page/admin-page/admin-page.component';
import { LoginPageComponent } from './../pages/login-page/login-page.component';
import { RegisterPageComponent } from './../pages/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserConfirmComponent,
    ErrorPageComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
