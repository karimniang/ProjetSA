import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddUserComponent } from './add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppRoutingModule } from '../app-routing.module';
import { DetailUserComponent } from './detail-user/detail-user.component';



@NgModule({
  declarations: [ListeUserComponent, AddUserComponent, DetailUserComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialFileInputModule
  ]
})
export class UserModule { }
