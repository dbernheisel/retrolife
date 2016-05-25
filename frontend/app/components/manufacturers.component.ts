import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

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
    this._manufacturerService.getManufacturers()
                             .then(manufacturers => this.manufacturers = manufacturers)
                             .catch(error => this.errorMessage = error);
  }
}