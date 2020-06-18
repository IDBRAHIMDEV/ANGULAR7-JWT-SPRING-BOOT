import { Address } from './../../models/address';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address = null;

  @Output() editAddress = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit() {

    this.editAddress.emit(this.address);
  }

}
