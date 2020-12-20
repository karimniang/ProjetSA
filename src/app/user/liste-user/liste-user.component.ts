import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { DataServiceService } from 'src/app/Service/Datas/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

  users: any = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  deleteUser(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        return this.dataService.removeUser(id);
      }
    })    
  }

  getAllUsers(): void {
    this.dataService.getUsers().subscribe((resp: {}) => {
      //console.log(resp)
      this.users = resp["hydra:member"];
      //return this.users;
      //console.log(this.users)
    });
  }

  
}
