import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { userMock } from '../../../shared/mocks/user/user-mock';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users = userMock;

  constructor(
    public iconService: IconComponentService
  ) { }


  ngOnInit(): void {
    console.log('users :', this.users);
  }

}
