import { IconComponentService } from './../../../services/icon.component.service';
import { Component, OnInit } from '@angular/core';
import { addressMock } from '../../../shared/mocks/address/address-mock';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {

  addresses = addressMock;
  constructor(
    public iconService: IconComponentService
  ) { }

  ngOnInit(): void {
    console.log('addresses :', this.addresses);
  }

}
