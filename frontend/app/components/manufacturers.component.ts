import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

import { Manufacturer } from '../models/manufacturer';
import { ManufacturerService } from '../services/manufacturer.service';

@Component({
  selector: 'manufacturers',
  templateUrl: 'app/templates/manufacturers.template.html'
})

export class ManufacturersComponent implements OnInit {
  errorMessage: string;
  manufacturers: Manufacturer[];

  constructor(
    private _router: Router,
    private _manufacturerService: ManufacturerService) { }

  ngOnInit() {
    this.getManufacturers();
  }

  getManufacturers() {
    this._manufacturerService.getManufacturers().subscribe(
       manufacturers => this.manufacturers = manufacturers,
       error => this.errorMessage = <any>error);
  }
}