import { Injectable } from '@angular/core';
import { 
  faAddressBook, 
  faCheckCircle, 
  faCog, 
  faEdit, 
  faFileInvoice, 
  faFilm, 
  faInfoCircle, 
  faMapMarkedAlt, 
  faPlusSquare, 
  faTachometerAlt, 
  faTrashAlt, 
  faUser, 
  faUserCheck, 
  faUserClock, 
  faUserEdit,
  faUserNinja, 
  faUsers, 
  faUserShield,
  faUsersSlash,
  faSignOutAlt,
  faUserLock
} from '@fortawesome/free-solid-svg-icons';

@Injectable()
export class IconComponentService {
  infoCircleIcon = faInfoCircle;
  editIcon = faEdit;
  deleteIcon = faTrashAlt;
  plusSquareIcon = faPlusSquare;
  addressIcon = faMapMarkedAlt;
  filmIcon = faFilm;
  invoiceIcon = faFileInvoice;
  dashboardIcon = faTachometerAlt;
  settingsIcon = faCog;
  userIcon = faUser;
  userEditIcon = faUserEdit;
  addressBookIcon = faAddressBook;
  checkCircleIcon = faCheckCircle;
  userShieldIcon = faUserShield;
  userNinjaIcon = faUserNinja;
  usersIcon = faUsers;
  userCheckIcon = faUserCheck;
  userClockIcon = faUserClock;
  usersSlashIcon = faUsersSlash;
  userLock = faUserLock;
  userLogout = faSignOutAlt;
}
