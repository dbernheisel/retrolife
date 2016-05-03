import { Developer }       from '../models/developer';
import { Http,
         Response,
         Headers,
         RequestOptions } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class DeveloperService {
  constructor(private http: Http) { }
  private _developerUrl = 'http://localhost:3000/api/developers';

  getDevelopers() {
    return this.http.get(`${this._developerUrl}.json`)
      .map(res => <Developer[]>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getDeveloper(id: number) {
    return this.http.get(`${this._developerUrl}/${id}.json`)
      .map(res => <Developer>res.json())
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createDeveloper(name: string) : Observable<Developer> {
    let body = JSON.stringify({ developer: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this._developerUrl}.json`, body, options)
      .map(res => <Developer>res.json())
      .catch(this.handleError)
  }

  updateDeveloper(developer:Developer) {
    let body = JSON.stringify({ developer: { name: developer.name, founded_on: developer.foundedOn, disbanded_on: developer.disbandedOn } });
    return this.http.put(`${this._developerUrl}/${developer.id}.json`, body)
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().meta.errors || 'Server Error');
  }
}