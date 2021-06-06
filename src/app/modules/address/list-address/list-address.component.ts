import { ToastrService } from 'ngx-toastr';
import { AddressService } from './../../../services/models/address.service';
import { AddressModel } from './../../../shared/models/address.model';
import { IconComponentService } from './../../../services/icon.component.service';
import { Component, OnInit } from '@angular/core';
import { addressMock } from '../../../shared/mocks/address/address-mock';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {

  // addresses = addressMock;
  addresses: AddressModel[] = [];
  loading: boolean;

  constructor(
    public iconService: IconComponentService,
    private addressService: AddressService,
    private toastrService: ToastrService
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses(): void {
    this.loading = true;
    this.addressService.getAll().subscribe((addresses: AddressModel[]) => {
      if (addresses) {
        this.addresses = addresses;
        this.addressService.getSuccessLoad();
        this.loading = false;
      }
    }, (error: ErrorEvent) => {
      console.log('error :', error);
      this.addressService.getErrorLoad(error);
      this.loading = false;
    })
  }
}
