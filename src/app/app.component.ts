import { IconComponentService } from './services/icon.component.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  constructor(
    public iconService: IconComponentService,
    private router: Router,
    private pageTitle: Title,
    private route: ActivatedRoute
  ) { }

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
  }
}
