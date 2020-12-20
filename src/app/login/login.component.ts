import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Service/Authentification/authentification.service'
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  user:Object;
  
  usernameIsvalide : boolean;
  passwordIsvalide : boolean;
  token

  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  ngOnInit(): void {
    //this.http.post("http://localhost:3000/users",{"username":"karim@niang.com","password":"password","username":"myuser"}).pipe().subscribe((resp: {})=>{
      //return resp
    //})
  }
  onSubmit(){
    //console.log('oki')
    this.authService.saveToken(this.form.username,this.form.password)
    this.token = this.authService.decodeToken();
    this.authService.redirectByRole(this.token.roles[0])
    console.log(this.token)

  }

}
