import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserFormComponentService } from 'src/app/services/form/user-form.service';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { UserService } from 'src/app/services/models/user.service';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-display-edit-user',
  templateUrl: './display-edit-user.component.html',
  styleUrls: ['./display-edit-user.component.scss']
})
export class DisplayEditUserComponent implements OnInit {

  user: UserModel = new UserModel();
  userId: number;
  userFormEdit: FormGroup;
  observableUser = new BehaviorSubject<UserModel>(null);
  loading: boolean = false;
  isReadOnly: boolean = false;
  currentUrl: any;

  constructor(
    private router: Router,
    private userFormComponentService: UserFormComponentService,
    private route: ActivatedRoute,
    private userService: UserService,
    private pageTitle: Title,
    public iconService: IconComponentService
  ) {
    this.userId = null;
    this.pageTitle.setTitle('Edition user');

    this.ifUserIdExists();
    this.getUserIfIdExists();
  }

  ngOnInit(): void {
    this.getRouteAction();
  }


  getUserById(movieId: number): Observable<UserModel> {
    return this.userService.get(movieId);
  }

  getRouteAction() {
    this.currentUrl = this.router.url;
    if (this.currentUrl === '/utilisateurs/details-utilisateur/' + this.userId) {
      this.isReadOnly = true;
    }
  }

  addAddress(): void {
    this.router.navigate(['/adresses/utilisateurs/' + this.userId]);
  }

  updateAddress(addresseId: number): void {
    this.router.navigate(['/adresses/edition-adresse/' + addresseId]);
  }

  ifUserIdExists(): void {
    this.loading = true;
    if (this.route.params !== undefined) {
      this.route.params.subscribe((params: any) => {
        if (params.id !== undefined) {
          this.userId = params.id;
          
          this.userService.get(params.id).subscribe((user: UserModel) => {
            if (this.isReadOnly) {
              this.userFormEdit = this.userFormComponentService.getCRUDReadUserFormGroup(user);
            } else {
              this.userFormEdit = this.userFormComponentService.getCRUDUpdateUserFormGroup(user);
            }

            this.loading = false;
          }, (error: ErrorEvent) => {
            this.router.navigate(['/page-introuvable']);
            throw new Error('Cette ressource n\'existe pas').message;
          });
        }
      });
    }
  }

  getUserIfIdExists(): void {

    if (this.userId) {
      this.getUserById(this.userId).subscribe((user: UserModel) => {
        if (user) {
          this.user = Object.assign({}, user);
          if (this.isReadOnly) {
            this.pageTitle.setTitle('Détails de l\'utilisateur : ' + this.user.firstName + ' ' + this.user.lastName);
          } else {
            this.pageTitle.setTitle('Détails de l\'utilisateur : ' + this.user.firstName + ' ' + this.user.lastName);
          }

          this.observableUser.next(user);
          
          this.userFormEdit.patchValue(this.user);
        }
      });
    }

  }

  updateUser(): void {
    this.loading = true;
    this.setValuesToUser();
    this.userFormComponentService.updateUser(this.user).subscribe((data: any) => {
      this.user = data;
      this.loading = false;
      this.router.navigate(['/utilisateurs/details-utilisateur/' + this.userId]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  setValuesToUser(): void {
    this.user = this.userFormEdit.getRawValue();
  }
  
}
