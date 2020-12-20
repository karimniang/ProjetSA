import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/Service/Datas/data-service.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  id: number;
  user;
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.showDetailUser();
  }

  showDetailUser() {
    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    return this.dataService.getOneUser(this.id).subscribe(
      response => {
        this.user = response;
        console.log(this.user);
        
      }
    )
  }

}
