import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/models/user.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(
    private pageTitle: Title
  ) {
    this.pageTitle.setTitle('Infos utilisateur');
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUserData'));
  }

}
