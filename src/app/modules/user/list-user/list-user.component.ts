import { Component, OnInit } from '@angular/core';
import { userMock } from '../../../shared/mocks/user/user-mock';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users = userMock;

  constructor() { }

  ngOnInit(): void {
    console.log('users :', this.users);
  }

}
