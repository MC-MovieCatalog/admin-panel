import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddressFormComponentsService } from 'src/app/services/form/address-form.service';
import { AddressService } from 'src/app/services/models/address.service';
import { UserService } from 'src/app/services/models/user.service';
import { AddressModel } from 'src/app/shared/models/address.model';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  address: AddressModel = new AddressModel();
  userId: number;
  user: UserModel = new UserModel();
  addressFormAdd: FormGroup;
  observableAddress = new BehaviorSubject<AddressModel>(null);
  loading: boolean = false;
  currentUrl: any;

  constructor(
    private router: Router,
    private addressFormComponentsService: AddressFormComponentsService,
    private route: ActivatedRoute,
    private addressService: AddressService,
    private pageTitle: Title,
    private userService: UserService
  ) {
    this.userId = null;
    this.pageTitle.setTitle('Edition adresse');

    this.ifUserIdExists();
  }

  ngOnInit(): void {
  }

  getUserById(userId: number): Observable<UserModel> {
    return this.userService.get(userId);
  }
  
  ifUserIdExists(): void {
    this.loading = true;
    if (this.route.params !== undefined) {
      this.route.params.subscribe((params: any) => {
        if (params.id !== undefined) {
          this.userId = params.id;

          this.userService.get(params.id).subscribe((user: UserModel) => {
            this.user = user;
            this.addressFormAdd = this.addressFormComponentsService.getCRUDAddressCreateFormGroup();
            this.addressFormAdd.patchValue(this.address);
            this.observableAddress.next(this.address);
            this.loading = false;
          }, (error: ErrorEvent) => {
            this.router.navigate(['/page-introuvable']);
            throw new Error('Cette ressource n\'existe pas').message;
          });
        }
      });
    }
  }

  onCreateMovie(): void {
    this.loading = true;
    this.setDataToMovie();

    this.addressFormComponentsService.saveAddress(this.address).subscribe((data: any) => {
      this.address = data.result;
      this.router.navigate(['/utilisateurs/details-utilisateur/' + this.user.id]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  setDataToMovie(): void {
    this.address = this.addressFormAdd.getRawValue();
    this.address.userId = this.user.id;
  }

}
