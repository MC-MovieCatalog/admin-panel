import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { UserFormComponentService } from 'src/app/services/form/user-form.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  user: UserModel = new UserModel();
  observableUser = new BehaviorSubject<UserModel>(new UserModel());
  loading: boolean;
  addressesKeys = Object.keys;

  constructor(
    private userFormComponentService: UserFormComponentService,
    private router: Router,
    private title: Title,
    private toastrService: ToastrService,
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.userForm = this.userFormComponentService.getCRUDUserCreateFormGroup();
    this.userForm.patchValue(this.user);
    this.observableUser.next(this.user);
    this.title.setTitle('MC - Ajout utilisateur');
  }

  onCreateUser(): void {
    this.forceValuesToUser();

    this.loading = true;

    console.log(this.user, 'form : ', this.userForm);
    this.userFormComponentService.saveUser(this.user).subscribe((data: any) => {
      this.user = data.result;
      this.router.navigate(['/utilisateurs' + this.user.id]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  forceValuesToUser(): void {
    this.user = this.userForm.getRawValue();
  }

}
