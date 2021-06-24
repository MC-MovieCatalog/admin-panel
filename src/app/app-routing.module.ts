import { ListAddressComponent } from './modules/address/list-address/list-address.component';
import { ListInvoiceComponent } from './modules/invoice/list-invoice/list-invoice.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { ListMovieComponent } from './modules/movie/list-movie/list-movie.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './modules/movie/create-movie/create-movie.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { CreateAddressComponent } from './modules/address/create-address/create-address.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { DisplayEditMovieComponent } from './modules/movie/display-edit-movie/display-edit-movie.component';
import { DisplayEditUserComponent } from './modules/user/display-edit-user/display-edit-user.component';
import { DisplayEditAddressComponent } from './modules/address/display-edit-address/display-edit-address.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'connexion', component: AuthenticationComponent },
  { path: 'films', component: ListMovieComponent },
  { path: 'films/ajouter-film', component: CreateMovieComponent },
  { path: 'films/edition-film/:id', component: DisplayEditMovieComponent },
  { path: 'films/details-film/:id', component: DisplayEditMovieComponent },
  { path: 'utilisateurs', component: ListUserComponent },
  { path: 'utilisateurs/ajouter-utilisateur', component: CreateUserComponent },
  { path: 'utilisateurs/edition-utilisateur/:id', component: DisplayEditUserComponent },
  { path: 'utilisateurs/details-utilisateur/:id', component: DisplayEditUserComponent },
  { path: 'factures', component: ListInvoiceComponent },
  { path: 'adresses', component: ListAddressComponent },
  { path: 'adresses/details-adresse/:id', component: DisplayEditAddressComponent },
  { path: 'adresses/edition-adresse/:id', component: DisplayEditAddressComponent },
  { path: 'adresses/utilisateurs/:id', component: CreateAddressComponent },
  { path: 'ajouter-adresse', component: CreateAddressComponent },
  { path: 'page-introuvable', component: NotFoundComponent},
  { path: '**', redirectTo: 'page-introuvable' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
