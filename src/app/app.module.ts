import { InvoiceService } from './services/models/invoice.service';
import { AddressService } from './services/models/address.service';
import { UserService } from './services/models/user.service';
import { MovieService } from './services/models/movie.service';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceFormComponentsService } from './services/form/invoice-form.service';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AddressFormComponentsService } from './services/form/address-form.service';
import { MovieFormComponentsService } from './services/form/movie-form.service';
import { UserFormComponentService } from './services/form/user-form.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UserInfoComponent } from './modules/user-info/user-info.component';

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
    DashboardComponent,
    AuthenticationComponent,
    NotFoundComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      preventDuplicates: true
    })
  ],
  providers: [
    MovieService,
    UserService,
    AddressService,
    InvoiceService,
    InvoiceFormComponentsService,
    AddressFormComponentsService,
    MovieFormComponentsService,
    UserFormComponentService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
