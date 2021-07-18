import { IconComponentService } from './services/icon.component.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from './services/auth/authentication.service';
import { UserModel } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconComponentService]
})
export class AppComponent implements OnInit {

  title = 'admin-panel';

  currentRoute: any;
  displayRoute: any;
  pageName: string = '';
  currentUserData: UserModel = new UserModel();

  currentUser: UserModel;
  constructor(
    public iconService: IconComponentService,
    public router: Router,
    private pageTitle: Title,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(u => this.currentUser = u);
  }

  onActivate(event: any) {
  }

  onDeactivate(event: any) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
        this.displayRoute = this.currentRoute.substring(1);
      }
    });

    if (localStorage.getItem('currentUserData')) {
      this.currentUserData = JSON.parse(localStorage.getItem('currentUserData'));
      console.log('currentUserData :', this.currentUserData);
    }
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/connexion']);
  }
}
