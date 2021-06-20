import { UserModel } from './../../../shared/models/user.model';
import { UserService } from './../../../services/models/user.service';
import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { userMock } from '../../../shared/mocks/user/user-mock';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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
    private userService: UserService,
    protected toastrService: ToastrService,
    private pageTitle: Title
  ) {
    this.loading = false;
  }


  ngOnInit(): void {
    this.getAllUsers();
    this.pageTitle.setTitle('Liste des utilisateurs');
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

  deleteUser(userId: number) {
    
    this.loading = true;
    this.userService.delete(userId).subscribe((result) => {
      if (result) {
        this.toastrService.success('Les informations de l\'utilisateur ont été supprimées avec succès !');
        this.ngOnInit();
      }
    }, (error: ErrorEvent) => {
      this.userService.getErrorLoad(error);
      this.loading = false;
    })
  }
}
