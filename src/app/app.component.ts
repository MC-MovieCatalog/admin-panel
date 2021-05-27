import { Component } from '@angular/core';
import { faAddressBook, faCog, faFileInvoice, faFilm, faMapMarkedAlt, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userIcon = faUser;
  addressIcon = faMapMarkedAlt;
  filmIcon = faFilm;
  invoiceIcon = faFileInvoice;
  dashboardIcon = faTachometerAlt;
  settingsIcon = faCog;
  title = 'admin-panel';
}
