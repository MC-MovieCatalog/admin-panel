import { ListAddressComponent } from './modules/address/list-address/list-address.component';
import { ListInvoiceComponent } from './modules/invoice/list-invoice/list-invoice.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { ListMovieComponent } from './modules/movie/list-movie/list-movie.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'films', component: ListMovieComponent },
  { path: 'utilisateurs', component: ListUserComponent },
  { path: 'factures', component: ListInvoiceComponent },
  { path: 'adresses', component: ListAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
