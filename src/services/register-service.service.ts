import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  registerPost(formValues: any): Observable<any> {
    return this.http.post("http://localhost:8081/api/users/register", formValues)
  }
  loginPost(loginValues: any): Observable<any> {
    return this.http.post("http://localhost:8081/api/users/login", loginValues)
  }
  verifyEmail(): Observable<any> {
    return this.http.get(`https://backend-dlab-mail-dkp5kqchu-cfarrioltypsa.vercel.app/api/mail`);
  }
  userConfirm(token: string){
    return this.http.get(`http://localhost:8081/api/users/confirmar-usuario/${token}`);
  }
  assignPermit(user: any){
    return this.http.post(`https://backend-dlab-mail-dkp5kqchu-cfarrioltypsa.vercel.app/api/mail`, user);
  }
  sendEmailToRecoveryPass(email: any){
    return this.http.post("http://localhost:8081/api/users/olvide-password", email)
  }
  sendPassToUpdate(pass:any, token:string){
    return this.http.post(`http://localhost:8081/api/users/nuevo-password/${token}`, pass)

  }

}
