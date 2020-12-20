import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilAdminComponent } from './admin/accueil-admin/accueil-admin.component';
import { AccueilFormateurComponent } from './Formateur/accueil-formateur/accueil-formateur.component';
import { LoginComponent } from './login/login.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { ListeProfilComponent } from './profil/liste-profil/liste-profil.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { ListeUserComponent } from './user/liste-user/liste-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil-admin', component: AccueilAdminComponent,
    children: [
      {path: '', component: ListeUserComponent},
      {path: 'liste-user', component: ListeUserComponent},
      {path: 'edit-user/:id', component: AddUserComponent},
      {path: 'detail-user/:id', component: DetailUserComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'liste-profil', component: ListeProfilComponent},
      {path: 'edit-profil/:id', component: AddProfilComponent},
      {path: 'add-profil', component: AddProfilComponent}
    ]
  },
  { path: 'accueil-formateur', component: AccueilFormateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
 