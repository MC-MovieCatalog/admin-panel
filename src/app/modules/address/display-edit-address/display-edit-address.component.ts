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
  selector: 'app-display-edit-address',
  templateUrl: './display-edit-address.component.html',
  styleUrls: ['./display-edit-address.component.scss']
})
export class DisplayEditAddressComponent implements OnInit {

  address: AddressModel = new AddressModel();
  addressId: number;
  addressFormEdit: FormGroup;
  // obsMovie: Observable<AddressModel>;
  observableAddress = new BehaviorSubject<AddressModel>(null);
  loading: boolean = false;
  isReadOnly: boolean = false;
  currentUrl: any;
  user: UserModel = new UserModel();

  constructor(
    private router: Router,
    private addressFormComponentsService: AddressFormComponentsService,
    private route: ActivatedRoute,
    private addressService: AddressService,
    private pageTitle: Title,
    private userService: UserService
  ) {
    this.addressId = null;
    this.pageTitle.setTitle('Edition adresse');

    this.ifAddressIdExists();
    this.getAddressIfIdExists();
  }

  ngOnInit(): void {
    this.getRouteAction();
  }

  getAddressById(addressId: number): Observable<AddressModel> {
    return this.addressService.get(addressId);
  }

  getRouteAction() {
    this.currentUrl = this.router.url;
    if (this.currentUrl === '/adresses/details-adresse/' + this.addressId) {
      this.isReadOnly = true;
    }
  }

  ifAddressIdExists(): void {
    this.loading = true;
    if (this.route.params !== undefined) {
      this.route.params.subscribe((params: any) => {
        if (params.id !== undefined) {
          this.addressId = params.id;

          this.addressService.get(params.id).subscribe((address: AddressModel) => {
            if (this.isReadOnly) {
              this.addressFormEdit = this.addressFormComponentsService.getCRUDReadAddressFormGroup(address);
            } else {
              this.addressFormEdit = this.addressFormComponentsService.getCRUDUpdateAddressFormGroup(address);
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

  getAddressIfIdExists(): void {

    if (this.addressId) {
      this.getAddressById(this.addressId).subscribe((address: AddressModel) => {
        if (address) {

          this.address = Object.assign({}, address);
          if (this.isReadOnly) {
            this.pageTitle.setTitle('Détails de l\'adresse : ' + this.address.type);
          } else {
            this.pageTitle.setTitle('Edition de l\'adresse : ' + this.address.type);
          }

          this.getUserById(this.address.userId).subscribe((user: UserModel) => {
            this.user = Object.assign({}, user);
          });
          this.observableAddress.next(address);

          this.addressFormEdit.patchValue(this.address);
          // this.obsMovie = this.observableAddress.asObservable();
        }
      });
    }

  }

  updateAddress(): void {
    this.loading = true;
    this.setDataToAddress();
    this.addressFormComponentsService.updateAddress(this.address).subscribe((data: any) => {
      this.address = data;
      this.loading = false;
      this.router.navigate(['/adresses/details-adresse/' + this.addressId]);
    }, (error: ErrorEvent) => {
      this.loading = false;
    })
  }

  setDataToAddress(): void {
    this.address = this.addressFormEdit.getRawValue();
  }

  getUserById(userId: number): Observable<UserModel> {
    return this.userService.get(userId);
  }
}
