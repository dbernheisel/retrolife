import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Developer } from '../models/developer';

@Injectable()

export class DeveloperService {
  private developerUrl = 'http://localhost:3000/api/developers';

  constructor(private http: Http) { }

  getDevelopers(): Promise<Developer[]> {
    return this.http.get(`${this.developerUrl}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getDeveloper(id: number): Promise<Developer> {
    return this.http.get(`${this.developerUrl}/${id}.json`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createDeveloper(name: string) : Promise<Developer> {
    let body = JSON.stringify({ developer: { name: name } });
    let headers = new Headers({ 'Content-Type': 'application/vnd.api+json' });
    return this.http.post(`${this.developerUrl}.json`, body, { headers: headers })
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  updateDeveloper(developer:Developer) {
    let body = JSON.stringify({
      developer: {
        name: developer.name,
        founded_on: developer.foundedOn,
        disbanded_on: developer.disbandedOn
      }
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.developerUrl}/${developer.id}.json`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}