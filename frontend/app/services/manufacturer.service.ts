import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Manufacturer } from '../models/manufacturer';

@Injectable()

export class ManufacturerService {
  private manufacturerUrl = 'http://localhost:3000/api/companies';

  constructor(private http: Http) { }

  getManufacturers(): Promise<Manufacturer[]> {
    return this.http.get(`${this.manufacturerUrl}?filter_role=manufacturer`)
      .toPromise()
      .then(response => response.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getManufacturer(id: number): Promise<Manufacturer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.manufacturerUrl}/${id}`, { headers: headers })
      .toPromise()
      .then(response => response.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createManufacturer(name: string): Promise<Manufacturer> {
    let body = JSON.stringify({ manufacturer: { name: name, role: 'Manufacturer' } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.manufacturerUrl}`, body, { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  updateManufacturer(manufacturer: Manufacturer) {
    let body = JSON.stringify({
      manufacturer: {
        name: manufacturer.name,
        founded_on: manufacturer.foundedOn,
        disbanded_on: manufacturer.disbandedOn
      }
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.manufacturerUrl}/${manufacturer.id}`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}