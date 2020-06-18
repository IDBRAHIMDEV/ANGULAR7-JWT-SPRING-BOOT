import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit {

  addresses: Address[];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {

    this.addressService.getAll()
        .subscribe((res: Address[]) => this.addresses = res)

  }

  persistAddress(data: Address) {
    this.addressService.Save(data)
        .subscribe((res: Address) => this.addresses = [res, ...this.addresses])
  }

}
