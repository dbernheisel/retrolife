import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Developer } from '../models/developer';

@Injectable()

export class DeveloperService {
  private developerUrl = 'http://localhost:3000/api/companies';

  constructor(private http: Http) { }

  getDevelopers(): Promise<Developer[]> {
    return this.http.get(`${this.developerUrl}?filter_role=developer`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getDeveloper(id: number): Promise<Developer> {
    return this.http.get(`${this.developerUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  createDeveloper(name: string) : Promise<Developer> {
    let body = JSON.stringify({ developer: { name: name, role: 'Developer' } });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.developerUrl}`, body, { headers: headers })
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
    return this.http.put(`${this.developerUrl}/${developer.id}`, body, { headers: headers })
  }

  private handleError(error: any) {
    console.log(error);
    return Promise.reject(error.meta.errors || 'Server Error');
  }
}