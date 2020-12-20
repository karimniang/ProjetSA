import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './Service/Authentification/authentification.service';
import { DataServiceService } from './Service/Datas/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetFilRougeFront';
  token;
  firstname;
  lastname;
  avatar;

  isNavOpened = false;
  constructor(private authentificationService: AuthentificationService, private router: Router, private dataService: DataServiceService ) {}

  ngOnInit() {
    if (window.location.href.includes('login')) {
      document.getElementById('navbar').hidden = true;
    }
    //console.log(this.token = this.authentificationService.getToken());
    this.dataService.getUserConnected().subscribe((resp: {}) => {
      this.firstname = resp['firstname'];
      this.lastname = resp['lastname']
      this.avatar = resp['avatar']
      //console.log(this.user)
    });
  }
  
    
  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

  logout(){
    this.authentificationService.logout();
    this.router.navigateByUrl('/login');
  }
}
