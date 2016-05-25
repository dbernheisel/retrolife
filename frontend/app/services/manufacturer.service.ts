import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Manufacturer } from '../models/manufacturer';

@Injectable()

export class ManufacturerService {
  private manufacturerUrl = 'http://localhost:3000/api/manufacturers';

  constructor(private http: Http) { }

  getManufacturers(): Promise<Manufacturer[]> {
    return this.http.get(`${this.manufacturerUrl}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getManufacturer(id: number): Promise<Manufacturer> {
    return this.http.get(`${this.manufacturerUrl}/${id}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createManufacturer(name: string): Promise<Manufacturer> {
    let body = JSON.stringify({ manufacturer: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/vnd.api+json' });
    return this.http.post(`${this.manufacturerUrl}.json`, body, { headers: headers })
      .toPromise()
      .then(response => response.json().data)
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
    return this.http.put(`${this.manufacturerUrl}/${manufacturer.id}.json`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}