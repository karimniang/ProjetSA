import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profil } from 'src/app/models/profil.model';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../Authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  essai;

  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API
  constructor(private http: HttpClient, private authService:AuthentificationService, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ this.authService.getToken()
    })
  };

  getUsers(): Observable<User> {
    return this.http.get<User>(this.urlApi+"users?deleted=false", this.httpOptions)
      .pipe(
      );
  }

  getUserConnected(): Observable<User> {
    return this.http.get<User>(this.urlApi+"user/connected", this.httpOptions)
      .pipe(
      );
  }

  getProfils(): Observable<Profil> {
    return this.http.get<Profil>(this.urlApi+"user_profils?deleted=false", this.httpOptions)
    .pipe(
    );
  }

  getOneProfil(id): Observable<Profil> {
    return this.http.get<Profil>(this.urlApi+"user_profils/"+id, this.httpOptions);
  }

  getOneUser(id): Observable<User> {
    return this.http.get<User>(this.urlApi+"users/"+id, this.httpOptions);
  }
 
  addUser(profil,firstname,lastname,email,telephone,avatar) {
 
  const formData = new FormData()
  formData.append('firstname', firstname);
  formData.append('lastname', lastname);
  formData.append('email', email);
  formData.append('telephone', telephone);
  formData.append('avatar', avatar);
  
    //console.log(formData)
     return this.http.post(this.urlApi+profil,formData,this.httpOptions).subscribe(
      res=>{
        console.log(res);
        
        //alert(res)
        this.essai = res
        //console.log('ok')
        //console.log(res)
      }
      ,
      err=>{
        //this.response = err.status
        console.log(err.status);
        
        if (err.status == 201) {
          Swal.fire(
            'User added!',
            'Click to access the list of users!',
            'success'
          )
          this.router.navigate(['accueil-admin/liste-user']);
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      }
    );
  }

  UpdateUser(id,profil,firstname,lastname,email,telephone,avatar) {
 
    const formData = new FormData()
    formData.append('id', id);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('avatar', avatar);
    formData.append('_method', "PUT");
    //console.log(formData)

    
      //console.log(formData)
       return this.http.post(this.urlApi+profil+"/"+id,formData,this.httpOptions).subscribe(
        response=>{
          console.log(response)
          if (response['response'] == "Success Updating") {
            Swal.fire(
              'User added!',
              'Click to access the list of users!',
              'success'
            )
            this.router.navigate(['accueil-admin/liste-user']);
          }
          
        }
        ,
        err=>{
          //this.response = err.status
          //console.log(err.status);
          
          
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error['hydra:description']
            })
          }
        
      );
    }


  addProfil(libelle) {
    return this.http.post(this.urlApi+"user_profils",{libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil added!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil-admin/liste-profil']);
         }else {
           Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Something went wrong!'
           })
         }
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    );
  }

  updateProfil(id,libelle) {
    //return this.urlApi+"user_profils/"+id;
    return this.http.put(this.urlApi+"user_profils/"+id,{id,libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil updated!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil-admin/liste-profil']);
         }
      }, err => {
        if (err.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error['hydra:description']
          })
        }
      }
    );
  }

  removeProfil(id) {
    return this.http.delete(this.urlApi+"user_profils/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Profil deleted with success!',
          'Click to access the list of Profils!',
          'success'
        )
        return response
      },
      resa => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        return resa
      }
    );
  }

  removeUser(id) {
    return this.http.delete(this.urlApi+"users/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'User deleted with success!',
          'Click to access the list of Profils!',
          'success'
        )
        return response
      },
      resa => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        //return resa
      }
    );
  }


}
