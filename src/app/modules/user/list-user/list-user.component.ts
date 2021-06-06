import { UserModel } from './../../../shared/models/user.model';
import { UserService } from './../../../services/models/user.service';
import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { userMock } from '../../../shared/mocks/user/user-mock';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  // users = userMock;
  users: UserModel[] = [];
  loading: boolean;

  constructor(
    public iconService: IconComponentService,
    private userService: UserService
  ) {
    this.loading = false;
  }


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.loading = true;
    this.userService.getAll().subscribe((users: UserModel[]) => {
      if (users) {
        this.users = users;
        this.userService.getSuccessLoad();
        this.loading = false;
      }
    }, (error: ErrorEvent) => {
      console.log('error :', error);
      this.userService.getErrorLoad(error);
      this.loading = false;
    })
  }
}
