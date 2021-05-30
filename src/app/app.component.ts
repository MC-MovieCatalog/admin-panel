import { IconComponentService } from './services/icon.component.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconComponentService]
})
export class AppComponent {

  title = 'admin-panel';

  constructor(
    public iconService: IconComponentService
  ) { }

}
