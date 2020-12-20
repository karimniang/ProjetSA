import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Service/Datas/data-service.service';

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.scss']
})
export class ListeProfilComponent implements OnInit {

  profils: any = [];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getAllProfils();
  }

  getAllProfils(): void {
    this.dataService.getProfils().subscribe(( resp: {})=>{
        this.profils = resp['hydra:member'];
        console.log(this.profils)
      });
  }

  deleteProfil(id) {
    return this.dataService.removeProfil(id);
  }
}
