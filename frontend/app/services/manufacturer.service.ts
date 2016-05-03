import { Manufacturer }       from '../models/manufacturer';
import { Http,
         Response,
         Headers,
         RequestOptions } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ManufacturerService {
  constructor(private http: Http) { }
  private _manufacturerUrl = 'http://localhost:3000/api/manufacturers';

  getManufacturers() {
    return this.http.get(`${this._manufacturerUrl}.json`)
      .map(res => <Manufacturer[]>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getManufacturer(id: number) {
    return this.http.get(`${this._manufacturerUrl}/${id}.json`)
      .map(res => <Manufacturer>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createManufacturer(name: string) : Observable<Manufacturer> {
    let body = JSON.stringify({ manufacturer: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this._manufacturerUrl}.json`, body, options)
      .map(res => <Manufacturer>res.json())
      .catch(this.handleError)
  }

  updateManufacturer(manufacturer:Manufacturer) {
    let body = JSON.stringify({ manufacturer: { name: manufacturer.name, founded_on: manufacturer.foundedOn, disbanded_on: manufacturer.disbandedOn } });
    return this.http.put(`${this._manufacturerUrl}/${manufacturer.id}.json`, body)
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().meta.errors || 'Server Error');
  }
}