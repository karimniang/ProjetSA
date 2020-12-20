import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/Service/Datas/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  registerForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  firstname;
  lastname;
  email;
  avatar;
  profil;
  telephone;
  response;
  modifier = false;
  id : number;
  ancien ;

  constructor(private formBuilder: FormBuilder, private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.ancien);
    this.getCurrentUser();
    this.registerForm = this.formBuilder.group({
      profil: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      avatar: [null],
      telephone: [null, Validators.required]
    });
    if (this.id) {
      this.registerForm = this.formBuilder.group({
        profil: [null],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
        telephone: [null, Validators.required],
        avatar: [null]
      });
    } 
  }

  onSubmitForm(){
    //alert("ok");

    if (!this.registerForm.valid) {
      return;
    }
    this.firstname = this.registerForm.value.firstname;
    this.lastname = this.registerForm.value.lastname;
    this.email = this.registerForm.value.email;
    this.telephone = this.registerForm.value.telephone;
    this.avatar = this.registerForm.value.avatar;
    
    //console.log(this.avatar);
    if (!this.id) {
      this.profil = this.registerForm.value.profil;
      //console.log(this.profil)
      //console.log(this.registerForm)
      this.dataService.addUser(this.profil,this.firstname,this.lastname,this.email,this.telephone,this.avatar);
    }else {
      //alert("ok")
      console.log(this.profil)
      this.dataService.UpdateUser(this.id,this.profil,this.firstname,this.lastname,this.email,this.telephone,this.avatar)
    }
    
    
  }

  onResetForm(){
    this.registerForm.reset();
  }

  onAnnuleForm(){
    this.registerForm.reset();
    this.router.navigate(["accueil-admin/liste-user"])
  }

  getCurrentUser() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.modifier = true;
      //console.log('update');
      this.dataService.getOneUser(this.id).subscribe(
        data => {
          this.ancien = data;
          this.profil = this.ancien.profil.libelle.toLowerCase()+"s";
          
        }
      );
    }
  }

  onFileSelect(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('avatar').setValue(file);
    }
  }

}
