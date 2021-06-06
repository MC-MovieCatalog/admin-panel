import { IconComponentService } from './services/icon.component.service';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconComponentService]
})
export class AppComponent implements OnInit {

  title = 'admin-panel';

  currentRoute: any;
  constructor(
    public iconService: IconComponentService,
    private router: Router
  ) { }

  onActivate(event: any) {
  }

  onDeactivate(event: any) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute=(<NavigationEnd>event).url;
        // console.log('current route :', this.currentRoute);
      }
    });
  }
}
