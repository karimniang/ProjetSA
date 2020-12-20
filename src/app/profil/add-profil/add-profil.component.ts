import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/Service/Datas/data-service.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

  profilRegister: FormGroup;
  libelle;
  ancien = { libelle: "" };
  id: number;

  constructor(private formBuilder: FormBuilder, private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentProfil();
    //this.ancien.libelle = 'essai';
    this.profilRegister = this.formBuilder.group({
      libelle: [null, Validators.required]
    });
  }

  onSubmitForm() {
    //alert("ok");
    //console.log(this.profilRegister.controls.libelle.errors.required)
    if (!this.profilRegister.valid) {
      return;
    }
    this.libelle = this.profilRegister.value.libelle;

    //Add or Update
    if (!this.id) {
      //console.log("added");
      this.dataService.addProfil(this.libelle)
    } else {
      //console.log("update");
      this.dataService.updateProfil(this.id, this.libelle);
    }
    //console.log(this.libelle);
  }

  onResetForm() {
    //alert("reset");
    this.profilRegister.reset();
    this.router.navigate(["accueil-admin/liste-profil"]);
  }


  getCurrentProfil() {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
        this.dataService.getOneProfil(this.id).subscribe(data => {
          this.ancien.libelle = data['libelle'];
          console.log(this.ancien)
        });
      }

  }

  libelleRequiredError() {

    const libelle = this.profilRegister.controls.libelle;

    return libelle.touched && libelle.hasError('required');

  }

}
