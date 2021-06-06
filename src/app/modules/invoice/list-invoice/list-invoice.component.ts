import { InvoiceService } from './../../../services/models/invoice.service';
import { Component, OnInit } from '@angular/core';
import { IconComponentService } from 'src/app/services/icon.component.service';
import { invoiceMock } from '../../../shared/mocks/invoice/invoice-mock';
import { InvoiceModel } from 'src/app/shared/models/invoice.model';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {

  // invoices = invoiceMock;
  invoices: InvoiceModel[] = [];
  loading: boolean;

  constructor(
    public iconService: IconComponentService,
    private invoiceService: InvoiceService
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices(): void {
    this.loading = true;
    this.invoiceService.getAll().subscribe((invoices: InvoiceModel[]) => {
      if (invoices) {
        this.invoices = invoices;
        this.invoiceService.getSuccessLoad();
        this.loading = false;
      }
    }, (error: ErrorEvent) => {
      console.log('error :', error);
      this.invoiceService.getErrorLoad(error);
      this.loading = false;
    })
  }
}
