import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { invoiceMock } from '../../../shared/mocks/invoice/invoice-mock';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {

  invoices = invoiceMock;

  constructor(
    public iconService: IconComponentService
  ) { }

  ngOnInit(): void {
    console.log('invoices :', this.invoices.length);
  }

}
