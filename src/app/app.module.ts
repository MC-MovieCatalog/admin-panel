import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAddressComponent } from './modules/address/create-address/create-address.component';
import { DisplayEditAddressComponent } from './modules/address/display-edit-address/display-edit-address.component';
import { DisplayEditMovieComponent } from './modules/movie/display-edit-movie/display-edit-movie.component';
import { CreateMovieComponent } from './modules/movie/create-movie/create-movie.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { DisplayEditUserComponent } from './modules/user/display-edit-user/display-edit-user.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { ListMovieComponent } from './modules/movie/list-movie/list-movie.component';
import { ListAddressComponent } from './modules/address/list-address/list-address.component';
import { ListInvoiceComponent } from './modules/invoice/list-invoice/list-invoice.component';
import { DisplayEditInvoiceComponent } from './modules/invoice/display-edit-invoice/display-edit-invoice.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CreateAddressComponent,
    DisplayEditAddressComponent,
    DisplayEditMovieComponent,
    CreateMovieComponent,
    CreateUserComponent,
    DisplayEditUserComponent,
    ListUserComponent,
    ListMovieComponent,
    ListAddressComponent,
    ListInvoiceComponent,
    DisplayEditInvoiceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
